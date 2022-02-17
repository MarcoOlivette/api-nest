import { Delete, Get, Post, Put } from '@nestjs/common';

export class UserController {
  @Get()
  public index(): any {
    return { data: 'create' };
  }
  @Get()
  public show(): any {
    return { data: 'create' };
  }
  @Post
  public create(): any {
    return { data: 'create' };
  }
  @Put()
  public update(): any {
    return { data: 'create' };
  }
  @Delete()
  public delete(): any {
    return { data: 'create' };
  }
}
