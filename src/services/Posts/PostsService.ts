import { AxiosResponse } from 'axios';
import $api from '../../api/api';
// import { IUser } from '../../model/IUser';
// import { IUsersListResponse } from '@/model/response/IUsersListResponse';

export default class PostsService {
    static getPosts(): Promise<AxiosResponse<any[]>> {
        return $api.get<any[]>('/posts');
    }
    //
    // static updateUser(updatedUser: IUser): Promise<AxiosResponse<IUser>> {
    //     return $api.patch<IUser>('/update-user', { updatedUser });
    // }
    //
    // static getCurrentUser(): Promise<AxiosResponse<IUser>> {
    //     return $api.get<IUser>('/me');
    // }
    //
    // static async success(): Promise<AxiosResponse<any>> {
    //     return $api.get('/');
    // }
    //
    // static getUsers(): Promise<AxiosResponse<IUsersListResponse[]>> {
    //     return $api.get('/get-users');
    // }
}