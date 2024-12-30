# Vue3 Starter Template

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/eghamat24/vue3-starter-template/blob/main/README.md)

ماجرای ساخت starter kit از آنجایی آغاز شد که قرار بود پروژههای جدید و شروع کنیم. میتونستیم هر پروژه رو به صورت جداگانهای توسعه بدیم و برای
هر کدوم یک تیم قرار بدیم و مشخصا راه پروژهها و تیم ها از هم جدا میشد. برای حل این مشکل و یکپارچه کردن پروژهها تصمیم گرفتیم یک استاندارد
کلی بزاریم و تمامی پروژهها از این استاندارد پیروی کنند. پیروی از این استاندارد باعث شد پروژهها تا حد زیادی در یک مسیر قرار بگیرن و نگهداری
اونها آسونتر بشه و همچنین سازگاری تیمها با پروژهها افزایش پیدا کنه.

## **مشکلات استفاده از فریمورکها**

استفاده از UI فریمورک ها باعث افزایش سرعت develop میشه و کامپوننتهای زیادی رو در اختیار ما قرار میده و این کامپوننتها قابلیتهای زیادی رو
پشتیبانی میکنه که با دادن پراپسها و اسلاتهای مختلف میشه از این قابلیتها استفاده کرد اما استفاده از این قابلیت ها باعث بروز مشکلاتی مانند
سرعت پایین کامپوننتها، قابلیت شخصی سازی پایین استایلها، امکانات اضافه و در دسترس نبودن منطق کامپوننت ها اشاره کرد که در starter kit این
مشکلات بر طرف شده

## **چرا این پروژه ایجاد شده؟**

راه اندازی سریع یک پروژه vue به خاطر اینکه استور، سرویسها، کامپوننتها و پیش نیاز های پروژه نوشته شدهاند، قابلیت شخصی سازی استایل کامپوننت
ها، سبک بودن کامپوننتها و افزایش سرعت پروژه، برآورده کردن نیازهای اولیه پروژه مثل سرویسها و ابزارها و پیروی پروژهها از یک استاندارد کلی
علت های اصلی ایجاد این پروژه هستند.

## **چرا کامپوننت ها بازنویسی شدن؟**

* سرعت: وجود پراپس ها و اسلات های کم و مورد استفاده باعث شده که سرعت صفحات حتی با وجود استفاده زیاد از کامپوننت ها به شدت بالا باشه و تفاوت
  کمی با استفاده از تگهای HTML داشته باشه.
* امکانات لازم: به صورت پیشفرض برای کامپوننتها قابلیت های پر استفاده و لازم پیاده سازی شده و در هر پروژه اگر نیاز به فیچر و قابلیت خاصی
  باشد باید پیاده سازی شود.
* شخصیسازی استایلها: برای هر کامپوننت یک فایل SCSS ساخته شده که استایلهای مربوط به اون کامپوننت داخلش نوشته شده. استایل هر کامپوننت با
  توجه به دیزاین پروژه تغییر پذیره.
* منطق: با توجه به اینکه کامپوننتها به صورت اوپن سورس هستند به منطق هر کامپوننت دسترسی کامل دارید و برای اضافه کردن فیچر جدید یا رفع باگ (
  در صورت وجود) نیاز به انتظار برای نسخه جدید ندارید.

## **این پروژه شامل چه بخش هایی است؟**

در این پروژه نیازهای اولیه که برای راه اندازی یک پروژه vue لازم است پیاده سازی شده که شامل بخش های استور[^1]، روتر[^2]، سرویسها[^3]،
چندزبانه[^4]، ابزارها[^5] است.برای استور و روتر از pinia و vue-router استفاده شده است که پکیج های رسمی vue هستند.  
سرویسها: شامل یک پروایدر برای مدیریت درخواستهای AJAX و سرویس های لازم برای مدیریت لوکالاستورج ، توکنها، دسترسی ها، زبان برنامه و احراز
هویت کاربر است.  
چندزبانه: مدیریت متنها به وسیله کتابخانه قدرتمند i18n و تعریف متنهای پیشفرض برنامه به زبان های فارسی و انگلیسی.  
ابزارها: متدهای پر استفاده به صورت پیشفرض در این بخش قرار داده شدهاند.

## **اعتبارسنجی فرمها**

برخی از فیلدهای فرم، نیازمند اعتبارسنجی با توجه به نوع ورودی که برای آنها تعیین شده دارند و برای این کار پکیج های زیادی وجود داره اما برای
اینکه وابستگی های پروژه کم بشه این امکان برای فرمها و اینپوتها پیاده سازی شده.   
این امکان قابلیت اضافه کردن قوانین مورد نیاز برای اعتبار سنجی فیلدها به صورت نامحدود رو داره و میشه چند قانون رو برای یک فیلد در نظر گرفت.
داخل بخش کامپوننت ها مثال هایی زده شده.

## **از چه پکیج هایی استفاده شده؟**

* Vite  
  از vite ورژن 4.3 به خاطر سرعت بالا در توسعه و امکاناتی که برای توسعه دهنده قرار میده استفاده شده.
* Pinia  
  سرعت بالا و راحتی توسعه و همچنین پشتیبانی از قابلیت composition api از pinia استفاده شده
* Vue-router  
  از نسخه 4 به خاطر پشتیبانی از composition api استفاده شده
* Vue-i18n  
  برای مدیریت چند زبانی پروژه از این پکیج استفاده شده و زبان های فارسی و انگلیسی به صورت پیشفرض اضافه شده است
* Bootstrap  
  استایل پیشفرض کامپوننت ها و پروژه با bootstrap ورژن 5 پیاده سازی شده و میشه با پکیج هایی مثل tailwind و … جایگزین بشه
* Axios  
  درخواست های سرویس با این پکیج مدیریت میشه
* Rtlcss  
  مدیریت استایل rtl و ltr در زبان های مختلف توسط این پکیج مدیریت میشه

## **Folder Structure**

`📂starter kit`  
`├──📂 src`  
`│   ├──📂 asset`  
`│   ├──📂 components`  
`│   ├──📂 composables`  
`│   ├──📂 directives`  
`│   ├──📂 enums`  
`│   ├──📂 locales`   
`│   ├──📂 router`  
`│   ├──📂 services`   
`│   ├──📂 stores`  
`│   ├──📂 utils`  
`│   ├──📂 views`  
`│   ├──📄 app.vue`  
`│   ├──📄 bootstrap.js`  
`│   └──📄 main.js`  
`├──📄 vite.config.js`  
`├──📄 package.json`  
`└──🌐 index.html`

## **چه کامپوننت هایی ساخته شده است و هر کدام چه امکاناتی دارند**

VForm  
این کامپوننت به جای تگ form استفاده میشه و امکان ولیدیشن (validation) رو فراهم میسازه.

VInput  
این کامپوننت علاوه بر امکاناتی که خود تگ input داره چند قابلیت دیگه رو هم پشتیبانی میکنه:

* اعتبارسنجی و نمایش متن خطا با توجه به قانون تعریف شده در پراپس rules
* اسلاتهای append و prepend که قابلیت شخصی سازی بیشتری رو فراهم میکنند
* امکان حذف مقادیر input با استفاده از پراپس clearable
* غیرفعال کردن با استفاده از پراپس disabled
* اسلات label

```vue

<VInput v-model="value" :rules="[validator.required('required')]" clearable disabled>
    <template #prepend>prepend</template>
    <template #label>test</template>
    <template #append>append</template>
</VInput>
```

VAutoComplete  
یکی از پرکاربردترین کامپوننت ها که قابلیت های زیادی رو پشتیبانی میکنه:

* پاس دادن آیتم ها به کامپوننت به وسیله پراپس items
* اعتبارسنجی و نمایش متن خطا با توجه به قانون تعریف شده در پراپس rules
* اسلاتهای append و prepend که قابلیت شخصی سازی بیشتری رو فراهم میکنند
* امکان حذف مقادیر input با استفاده از پراپس clearable
* تعیین متن آیتمهای منو بر اساس فیلد خاصی از آیتم های پاس داده شده با استفاده از پراپس item-text
* تعیین value کامپوننت بر اساس فیلد خاصی از آیتم های پاس داده شده با استفاده از پراپس item-key
* شخصی سازی آیتمهای منو به وسیله اسلات item
* اسلات label
* غیرفعال کردن با استفاده از پراپس disabled
* تعین سایز کامپوننت به وسیله پراپس size

```vue

<VAutoComplete
    v-model="value"
    :items="items"
    item-key="id"
    item-text="name"
    size="md"
    clearable
    disabled
    :rules="[validator.required('required')]"
>
    <template #label>test</template>
    <template #item="{item}">{{item}}</template>
</VAutoComplete>
```

VRadioGroup  
این کامپوننت به عنوان پروایدر عمل میکنه و گروه بندی input ها رو انجام میده

* اعتبارسنجی و نمایش متن خطا با توجه به قانون تعریف شده در پراپس rules
* تعیین name مشترک برای تمام input ها با پراپس name

VRadio  
این کامپوننت به عنوان input با تایپ radio استفاده میشه:

* پراپس value برای مشخص کردن مقدار input
* غیرفعال کردن با استفاده از پراپس disabled
* پراپس های outlined و button برای تغییر استایل
* پراپس theme برای تغییر رنگ کامپوننت
* اسلات label

```vue

<VRadioGroup name="radio-button" v-model="value" :rules="[validator.required('required')]">
    <VRadio outlined value="1">
        <template #label>number one</template>
    </VRadio>
    <VRadio button theme="danger" value="2">
        <template #label>number two</template>
    </VRadio>
    <VRadio disabled outlined theme="dark" value="3">
        <template #label>number three</template>
    </VRadio
</VRadioGroup>
```

VTextArea  
این کامپوننت علاوه بر امکاناتی که خود تگ textarea داره چند قابلیت دیگه رو هم پشتیبانی میکنه:

* اعتبارسنجی و نمایش متن خطا با توجه به قانون تعریف شده در پراپس rules
* غیرفعال کردن با استفاده از پراپس disabled
* اسلات label

```vue

<VTextArea v-model="value" :rules="[validator.required('required')]" disabled>
    <template #label>label</template>
</VTextArea>
```

VTooltip

* پراپس position برای تعیین مکان tooltip
* پراپس trigger برای تعیین ایونت کامپوننت (hover , click , focus)
* تغییر استایل کامپوننت با استفاده از پراپس theme
* اسلات activator

```vue

<VTooltip theme="warning" position="start">
    <template #activator="{on}">
        <button v-on="on">activator</button>
    </template>
    <template #default>Tooltip</template>
</VTooltip>
```

VModal  
یکی از پرکاربردترین کامپوننت ها که قابلیت های زیادی رو پشتیبانی میکنه و قابلیت شخصی سازی زیادی هم داره:

* پراپس show برای نمایش کامپوننت
* پراپس size برای تعیین اندازه کامپوننت
* پراپس mobile-breakpoint برای تمام صفحه شدن کامپوننت در سایز های موبایل
* اسلات header برای شخصی سازی header کامپوننت
* اسلات title برای تغییر عنوان کامپوننت
* اسلات body برای پیاده سازی محتوای کامپوننت
* اسلات footer برای قرار دادن اکشن ها و شخصی سازی footer کامپوننت
* ایونت show قابلیت انجام عملیات هنگام بازٰشدن مودال رو میده
* ایونت hide قابلیت انجام عملیات هنگام بسته شدن مودال رو میده

```vue

<VModal v-model:show="value" size="md" mobile-breakpoint="sm" @show="doSomthingOnShow" @hide="doSomthingOnHide">
    <template #title>title</template>
    <template #body>body</template>
    <template #footer>footer</template>
</VModal>
```

ٰTable  
این پروژه دو کامپوننت جدول دارد که یکی برای دادههای سمت سرور و دیگری داده های استاتیک.

VTable و VTableServer  
VTable جدولی برای داده های استاتیک و VTableServer برای دادههای سمت سرور

* پاس دادن آیتم ها به کامپوننت به وسیله پراپس items
* تعداد کل آیتمها توسط پراپس items-length
* تعداد ردیفهای جدول با پراپس items-per-page
* تعیین شماره صفحه با پراپس page
* حالت لودینگ جدول با پراپس is-loading
* اسلات row برای شخصی سازی ردیف های جدول

```vue

<VTable :items="items" :items-length="items.length" items-per-page="10" :page="page" :is-loading="isLoading">
    <template #row="{item, columns}">
        <tr>
            <component :is="column" v-for="(column, index) of columns" :key="index"/>
        </tr>
    </template>
    <VColumn field="name" header="name"></VColumn>
    <VColumn field="id" header="id"></VColumn>
</VTable>
<VTableServer :items="items" :items-length="items.length" items-per-page="10" :page="page" :is-loading="isLoading">
    <template #row="{item, columns}">
        <tr>
            <component :is="column" v-for="(column, index) of columns" :key="index"/>
        </tr>
    </template>
    <VColumn field="name" header="name"></VColumn>
    <VColumn field="id" header="id"></VColumn>
</VTableServer>
```

VColumn

کامپوننتی برای تعین ستون های جدول

* پراپس field برای تعیین مقدار ستون با توجه به هر آیتم
* پراپس header برای تعیین هدر هر ستون
* اسلات body برای شخصی سازی مقدار هر ستون
* اسلات header برای شخصی سازی هدر هر ستون

```vue

<VColumn>
    <template #header> name</template>
    <template #body="{item}"> {{item.name}}</template>
</VColumn>
```

[^1]:  store

[^2]:  router

[^3]:  services

[^4]:  localization

[^5]:  utils
