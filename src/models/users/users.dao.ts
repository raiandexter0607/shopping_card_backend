import { type IUsers } from 'src/interfaces/IUsers'
import { users } from './users.model'

export class UsersDao {
  async getAll (): Promise<IUsers[]> {
    const usersList: IUsers[] = users
    return usersList
  }
}
