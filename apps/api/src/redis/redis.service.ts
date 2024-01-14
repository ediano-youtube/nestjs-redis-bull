import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RedisService {
  constructor(
    @Inject('REDIS_PROVIDER') private readonly redisService: ClientProxy,
  ) {}

  get redis() {
    return this.redisService;
  }
}
