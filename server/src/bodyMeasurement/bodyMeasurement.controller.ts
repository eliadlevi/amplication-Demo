import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BodyMeasurementService } from "./bodyMeasurement.service";
import { BodyMeasurementControllerBase } from "./base/bodyMeasurement.controller.base";

@swagger.ApiTags("bodyMeasurements")
@common.Controller("bodyMeasurements")
export class BodyMeasurementController extends BodyMeasurementControllerBase {
  constructor(
    protected readonly service: BodyMeasurementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
