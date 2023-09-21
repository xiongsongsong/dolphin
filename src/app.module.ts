import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { RedisModule } from "nestjs-redis";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    RedisModule.register([
      {
        name: "dolphin",
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT, 10),
        username: process.env.REDIS_ACCOUNT,
        db: parseInt(process.env.REDIS_APPLICATION_DB, 10),
        password: process.env.REDIS_PASSWORD,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
