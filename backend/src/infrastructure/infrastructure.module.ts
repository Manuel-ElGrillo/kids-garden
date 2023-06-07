import { Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';
import { InquiryController } from './controllers/inquiry.controller';

@Module({
    imports: [ApplicationModule],
    controllers: [InquiryController]
})
export class InfrastructureModule {}
