import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-build-panel',
  templateUrl: './build-panel.component.html',
  styleUrls: ['./build-panel.component.css']
})
export class BuildPanelComponent implements OnInit {
  @Input() panelOpenState = false;
  output: string = "gcc -Wall -Wmissing-prototypes -Wpointer-arith -Wdeclaration-after-statement -Wendif-labels -Wmissing-format-attribute -Wformat-security -fno-strict-aliasing -fwrapv -fexcess-precision=standard -g -g -O2 -fstack-protector-strong -Wformat -Werror=format-security -fPIC -pie -fno-omit-frame-pointer -fPIC -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5  -c -o ftcompare.o ftcompare.c\n" +
  "gcc -Wall -Wmissing-prototypes -Wpointer-arith -Wdeclaration-after-statement -Wendif-labels -Wmissing-format-attribute -Wformat-security -fno-strict-aliasing -fwrapv -fexcess-precision=standard -g -g -O2 -fstack-protector-strong -Wformat -Werror=format-security -fPIC -pie -fno-omit-frame-pointer -fPIC -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5  -c -o ftinsert.o ftinsert.c\n" +
  "gcc -Wall -Wmissing-prototypes -Wpointer-arith -Wdeclaration-after-statement -Wendif-labels -Wmissing-format-attribute -Wformat-security -fno-strict-aliasing -fwrapv -fexcess-precision=standard -g -g -O2 -fstack-protector-strong -Wformat -Werror=format-security -fPIC -pie -fno-omit-frame-pointer -fPIC -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5  -c -o ftpage.o ftpage.c\n" +
  "gcc -Wall -Wmissing-prototypes -Wpointer-arith -Wdeclaration-after-statement -Wendif-labels -Wmissing-format-attribute -Wformat-security -fno-strict-aliasing -fwrapv -fexcess-precision=standard -g -g -O2 -fstack-protector-strong -Wformat -Werror=format-security -fPIC -pie -fno-omit-frame-pointer -fPIC -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5  -c -o ftree.o ftree.c\n" +
  "gcc -Wall -Wmissing-prototypes -Wpointer-arith -Wdeclaration-after-statement -Wendif-labels -Wmissing-format-attribute -Wformat-security -fno-strict-aliasing -fwrapv -fexcess-precision=standard -g -g -O2 -fstack-protector-strong -Wformat -Werror=format-security -fPIC -pie -fno-omit-frame-pointer -fPIC -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5  -c -o ftsearch.o ftsearch.c\n" +
  "gcc -Wall -Wmissing-prototypes -Wpointer-arith -Wdeclaration-after-statement -Wendif-labels -Wmissing-format-attribute -Wformat-security -fno-strict-aliasing -fwrapv -fexcess-precision=standard -g -g -O2 -fstack-protector-strong -Wformat -Werror=format-security -fPIC -pie -fno-omit-frame-pointer -fPIC -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5  -c -o ftutils.o ftutils.c\n" +
  "gcc -Wall -Wmissing-prototypes -Wpointer-arith -Wdeclaration-after-statement -Wendif-labels -Wmissing-format-attribute -Wformat-security -fno-strict-aliasing -fwrapv -fexcess-precision=standard -g -g -O2 -fstack-protector-strong -Wformat -Werror=format-security -fPIC -pie -fno-omit-frame-pointer -fPIC -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5  -c -o ftsort.o ftsort.c\n" +
  "gcc -Wall -Wmissing-prototypes -Wpointer-arith -Wdeclaration-after-statement -Wendif-labels -Wmissing-format-attribute -Wformat-security -fno-strict-aliasing -fwrapv -fexcess-precision=standard -g -g -O2 -fstack-protector-strong -Wformat -Werror=format-security -fPIC -pie -fno-omit-frame-pointer -fPIC -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5  -c -o ftvalidate.o ftvalidate.c\n" +
  "gcc -Wall -Wmissing-prototypes -Wpointer-arith -Wdeclaration-after-statement -Wendif-labels -Wmissing-format-attribute -Wformat-security -fno-strict-aliasing -fwrapv -fexcess-precision=standard -g -g -O2 -fstack-protector-strong -Wformat -Werror=format-security -fPIC -pie -fno-omit-frame-pointer -fPIC -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5  -c -o ftxlog.o ftxlog.c\n" +
  "gcc -Wall -Wmissing-prototypes -Wpointer-arith -Wdeclaration-after-statement -Wendif-labels -Wmissing-format-attribute -Wformat-security -fno-strict-aliasing -fwrapv -fexcess-precision=standard -g -g -O2 -fstack-protector-strong -Wformat -Werror=format-security -fPIC -pie -fno-omit-frame-pointer -fPIC -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5  -c -o sortsupport.o sortsupport.c\n" +
  "gcc -Wall -Wmissing-prototypes -Wpointer-arith -Wdeclaration-after-statement -Wendif-labels -Wmissing-format-attribute -Wformat-security -fno-strict-aliasing -fwrapv -fexcess-precision=standard -g -g -O2 -fstack-protector-strong -Wformat -Werror=format-security -fPIC -pie -fno-omit-frame-pointer -fPIC -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5  -c -o tuplesort.o tuplesort.c\n" +
  "gcc -Wall -Wmissing-prototypes -Wpointer-arith -Wdeclaration-after-statement -Wendif-labels -Wmissing-format-attribute -Wformat-security -fno-strict-aliasing -fwrapv -fexcess-precision=standard -g -g -O2 -fstack-protector-strong -Wformat -Werror=format-security -fPIC -pie -fno-omit-frame-pointer -fPIC -shared -o ftree.so ftcompare.o ftinsert.o ftpage.o ftree.o ftsearch.o ftutils.o ftsort.o ftvalidate.o ftxlog.o sortsupport.o tuplesort.o -L/usr/lib/x86_64-linux-gnu  -Wl,-Bsymbolic-functions -Wl,-z,relro -Wl,-z,now -L/usr/lib/llvm-6.0/lib  -L/usr/lib/x86_64-linux-gnu/mit-krb5 -Wl,--as-needed  \n" +
  "/usr/bin/clang-6.0 -Wno-ignored-attributes -fno-strict-aliasing -fwrapv -O2  -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5 -flto=thin -emit-llvm -c -o ftcompare.bc ftcompare.c\n" +
  "/usr/bin/clang-6.0 -Wno-ignored-attributes -fno-strict-aliasing -fwrapv -O2  -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5 -flto=thin -emit-llvm -c -o ftinsert.bc ftinsert.c\n" +
  "/usr/bin/clang-6.0 -Wno-ignored-attributes -fno-strict-aliasing -fwrapv -O2  -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5 -flto=thin -emit-llvm -c -o ftpage.bc ftpage.c\n" +
  "/usr/bin/clang-6.0 -Wno-ignored-attributes -fno-strict-aliasing -fwrapv -O2  -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5 -flto=thin -emit-llvm -c -o ftree.bc ftree.c\n" +
  "/usr/bin/clang-6.0 -Wno-ignored-attributes -fno-strict-aliasing -fwrapv -O2  -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5 -flto=thin -emit-llvm -c -o ftsearch.bc ftsearch.c\n" +
  "/usr/bin/clang-6.0 -Wno-ignored-attributes -fno-strict-aliasing -fwrapv -O2  -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5 -flto=thin -emit-llvm -c -o ftutils.bc ftutils.c\n" +
  "/usr/bin/clang-6.0 -Wno-ignored-attributes -fno-strict-aliasing -fwrapv -O2  -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5 -flto=thin -emit-llvm -c -o ftsort.bc ftsort.c\n" +
  "/usr/bin/clang-6.0 -Wno-ignored-attributes -fno-strict-aliasing -fwrapv -O2  -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5 -flto=thin -emit-llvm -c -o ftvalidate.bc ftvalidate.c\n" +
  "/usr/bin/clang-6.0 -Wno-ignored-attributes -fno-strict-aliasing -fwrapv -O2  -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5 -flto=thin -emit-llvm -c -o ftxlog.bc ftxlog.c\n" +
  "/usr/bin/clang-6.0 -Wno-ignored-attributes -fno-strict-aliasing -fwrapv -O2  -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5 -flto=thin -emit-llvm -c -o sortsupport.bc sortsupport.c\n" +
  "/usr/bin/clang-6.0 -Wno-ignored-attributes -fno-strict-aliasing -fwrapv -O2  -I. -I./ -I/usr/include/postgresql/11/server -I/usr/include/postgresql/internal -I/usr/include/x86_64-linux-gnu -Wdate-time -D_FORTIFY_SOURCE=2 -D_GNU_SOURCE -I/usr/include/libxml2  -I/usr/include/mit-krb5 -flto=thin -emit-llvm -c -o tuplesort.bc tuplesort.c";
  constructor() { }

  ngOnInit() {
  }

}
