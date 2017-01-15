import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import * as marked from 'marked';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any, args?: any): SafeHtml {
    if (value === undefined || value === null) {
      return '';
    }
    localStorage.setItem('amke', value);
    /* Angular では、通常 HTML タグを記述した場合はサニタイジング処理がされる。
       Markdown を表示する場合、サニタイジング処理されると困るので、DomSanitizer, SafeHtml を利用してそれをしないようにしている。 */
    return this.sanitizer.bypassSecurityTrustHtml(marked(value))
  }

}
