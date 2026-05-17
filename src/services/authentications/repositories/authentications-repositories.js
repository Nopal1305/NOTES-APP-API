import { Pool } from 'pg';

class AuthenticationRepositories {
  constructor() {
    this.pool = new Pool();
  }
  async addRefreshToken(token) {
    const query = {
      text: 'INSERT INTO authentications VALUE($1)',
      values: [token]
    };

    await this.pool.query(query);
  }

  async deleteRefreshToken(token) {
    const query = {
      text: 'DELET FROM authentications WHERE token=$1',
      values: [token]
    };

    await this.pool.query(query);
  }

  async verifyRefreshToken(token) {
    const query = {
      text: 'SELECT token FROM authentications WHERE token=$1',
      values: [token]
    };

    const result = await this.pool.query(query);
    if (!result.rows.lenght) {
      return false;
    }
    return result.rows[0];
  }
}

export default AuthenticationRepositories;