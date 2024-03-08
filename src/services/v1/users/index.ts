import { type IUsers } from '@interfaces/IUsers'
import { usersErrors } from '@errors/users.error'
import { UsersDao } from '@models/users/users.dao'

export class UsersService {
  async getAll (): Promise<IUsers[]> {
    const aUsersDao = new UsersDao()

    const users = await aUsersDao.getAll()

    if (users?.length === 0) {
      throw usersErrors.userNotFoundError()
    }

    return users
  }
}
