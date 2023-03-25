import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BodyMeasurementServiceBase } from "./base/bodyMeasurement.service.base";

@Injectable()
export class BodyMeasurementService extends BodyMeasurementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
