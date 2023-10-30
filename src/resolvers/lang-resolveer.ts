import { ExecutionContext } from '@nestjs/common';
import { I18nResolver } from 'nestjs-i18n';

export class LangResovler implements I18nResolver {
  async resolve(context: ExecutionContext): Promise<string> {
    // console.log(context);
    return 'hi';
  }
}
