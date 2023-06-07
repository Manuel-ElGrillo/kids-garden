import { Module } from '@nestjs/common';
import { PostgreDatabaseModule } from '../infrastructure/database';
import { InquiryService } from './services';
import { MailService } from './helpers';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: 'smtp.ethereal.email',
                port: 587,
                auth: {
                    user: 'emmalee.hilpert@ethereal.email',
                    pass: 'sU7sWw6MNt3zqgdE9E'
                }
            }
        }),
        PostgreDatabaseModule],
    providers: [InquiryService, MailService],
    exports: [InquiryService, MailService],
})
export class ApplicationModule {}
