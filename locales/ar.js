export default {
  inputs: {
    full_name                   : 'الاسم الكامل',
    full_name_placeholder       : 'ادخل الاسم الكامل',
    email                       : 'بريد إلكتروني',
    password                    : 'كلمة المرور',
    phone                       : 'هاتف',
    phone_number_placeholder    : 'ادخل رقم الهاتف المحمول',
    password_confirmation       : 'تأكيد كلمة المرور',
    first_name                  : 'الاسم الأول',
    last_name                   : 'اسم العائلة',
    new_password                : 'كلمة المرور الجديدة',
    confirmation_new_password   : 'تأكيد كلمة المرور الجديدة',
    enter                       : 'إدخال',
    specialty                   : 'التخصص',
    specialty_placeholder       : 'ادخل التخصص',
    nationality                 : 'الجنسية',
    passport_number             : 'رقم جواز السفر',
    date_of_birth               : 'تاريخ الميلاد',
    'Contact Person'            : 'الشخص المسؤول',
    'Contact Person placeholder': 'ادخل اسم الشخص المسؤول',
    Website                     : 'الموقع الالكتروني',
    Attachments                 : 'المرفقات',
    'Current Work'              : 'العمل الحالي',
    'Current Work Placeholder'  : 'نطاق العمل الحالي'
  },
  actions: {
    sign_up               : 'إنشاء حساب جديد',
    verify                : 'تحقق',
    upload_passport       : 'تحميل جواز السفر',
    apply                 : 'سجل',
    addToDraft            : 'احفظ الطلب',
    cancel                : 'إلغاء',
    ignore                : 'تجاهل',
    next                  : 'التالي',
    skip                  : 'تخطي',
    book_now              : 'احجز الان',
    book_close            : 'انتهى الحجز ',
    search                : 'بحث',
    resend                : 'إعادة إرسال',
    complete_profile      : 'أكمل بياناتك الشخصية',
    continue              : 'متابعة',
    more_details          : 'ابدأ رحلة البحث',
    contact_us            : 'استشارة مجانية',
    login                 : 'تسجيل الدخول',
    explore_your_options  : 'استكشف خياراتك',
    send_message          : 'أرسل',
    apply_now             : 'قدم الآن',
    compare_program       : 'قارن البرنامج',
    see_more              : 'شاهد المزيد',
    delete                : 'حذف',
    apply_date            : 'تاريخ التسجيل',
    see_details           : 'عرض التفاصيل',
    save                  : 'حفظ',
    read_more             : 'اقرأ المزيد',
    read_less             : 'اقرأ أقل',
    show                  : 'عرض',
    hide                  : 'إخفاء',
    change_mobile         : 'تعديل رقم الهاتف',
    send_verification_code: 'ارسل رمز التفعيل',
    registration_closed   : 'انتهى التسجيل',
    admission_file        : 'ملف القبول'
  },
  pages: {
    home: {
      hero: {
        title      : 'نربط الطلاب بالفرص التعليمية حول العالم من خلال حلول ذكية مدعومة بالذكاء الاصطناعي،',
        description: 'نساعدك في الوصول إلى الجامعات والبرامج الدراسية في وجهات دراسية مختلفة والتقديم إليها بسهولة.'
      },
      where_study: {
        title      : 'اختر وجهتك الدراسية',
        description: 'اكتشف أفضل الجامعات حول العالم، اختر البرنامج المناسب، وسجّل بخطوات بسيطة '
      },
      category: {
       title      : 'ما الذي نقدمه لطلابنا ؟ ',
       description: 'نساعدك على اكتشاف التخصص الأنسب لك، ونوفّر لك أدوات ذكية لاختيار والتقديم على البرنامج الأنسب لك بخطوات بسيطة، موجهة، ومدعومة بالذكاء الاصطناعي.',
       categories : {
          careerCounselling: {
            title      : ' التوجيه الذكي',
            description: 'نقدّم لك بيانات دقيقة ومقترحات مخصصة تساعدك على اختيار المسار الجامعي الأنسب لاهتماماتك وأهدافك.',
          },
          personalizedConsultations: {
            title      : 'الترشيح الأكاديمي',
            description: 'باستخدام خوارزميات مطورة، نرشّح لك البرامج والجامعات التي تناسب ملفك الشخصي الأكاديمي والثقافي.', },
          programMatching: {
            title      : 'دعم مباشر للتقديم',
            description: 'سجّل مباشرة عبر المنصة وتابع حالة طلبك خطوة بخطوة حتى القبول النهائي.', },
          admissionAssistance: {
            title      : ' الاستشارات الفردية',
            description: 'تواصل مع أحد مستشارينا للحصول على إرشاد شخصي حول القبول، التخصصات، أو تجهيز الوثائق.', },
          scholarshipsFunding: {
            title      : ' الحسومات والمنح',
            description: 'تابع فرص الحسومات المتاحة واحصل على من جامعات عديدة ضمن المنصة', },
          visaAssistance: {
            title      : ' دعم ما بعد القبول',
            description: 'نوفر لك خدمات ما بعد القبول، مثل استخراج التأشيرة، حجز السكن، وخدمات الوصول لوجهتك الدراسية.', }
        }
      },
      testimonials: {
        title      : 'قصص نجاح طلابنا!',
        description: 'اختارنا العديد من الطلاب للتسجيل في جامعة أحلامهم. بفضل الذكاء الاصطناعي، نقدم نتائج سريعة ودقيقة وشخصية للطلاب في جميع أنحاء العالم.  '
      },
      cta: {
        title      : 'المنح الدراسية وفرص التمويل',
        description: 'أصبح إيجاد المنح الدراسية أسهل من أي وقت مضى. نحن هنا لمساعدتك.'
      },
      universities: {
        title      : 'استكشف أفضل الجامعات ',
        description: 'ابحث عن جامعة أحلامك مع مجموعة واسعة من الجامعات والبرامج التي نقدمها. اختر ما يناسبك'
      },
      partners: {
        title      : 'تعرف على إدموف',
        description: 'نحن هنا لتطوير تجربة الدراسة في الخارج وربط الطلاب بالفرص التعليمية حول العالم عن طريق أدوات ذكية مدعومة بالذكاء الاصطناعي حيث يمكنك البحث والمقارنة والتقديم والحصول على قبولك مجاناً .',
        label      : 'نفتخر بشراكاتنا'
      },
      programs: {
        title      : 'برامج دراسية مخصصة لك ',
        description: ' اختر من بين آلاف البرامج، ونحن نساعدك في الوصول إلى الخيار الأنسب لطموحاتك واهتماماتك.',
      },
      contact: {
        title      : 'حجز موعد استشارة مجانية ',
        description: 'تواصل مع مستشارينا وابدأ خطوتك الأولى في البحث عن جامعة أحلامك'
      },
      blogs: {
        title      : 'دليل الطالب',
        description: 'كل ما تحتاج معرفته عن الدراسة في الخارج ,تصفح مجموعة واسعة من المقالات والمعلومات التي تهمك خلال رحلتك الدراسية للوصول إلى جامعة أحلامك',
      },
      footer: {
        description   : 'مرحباً بكم في ادموف، المنصة التي تساعدك على اكتشاف الوجهة والجامعة المناسبة لك والتقديم إليها بخطوات واضحة وبسيطة. نحن هنا لجعل رحلة الدراسة في الخارج اسهل , أبسط , ومتاحة للجميع .',
        privacy_policy: 'سياسة الخصوصية',
        copyright     : 'كافة الحقوق محفوظة © ',
        ICEF          : ' حاصلة على اعتماد ICEF',
      }
    },
    sign_up: {
      title      : 'إنشاء حساب',
      description: 'أدخل بيانتك لإنشاء حساب في منصة إدموف'
    },
    login: {
      title      : 'تسجيل الدخول',
      description: 'أدخل بياناتك لتسجيل الدخول'
    },
    verify: {
      title               : 'التحقق من الحساب',
      description         : 'أدخل رمز التحقق المرسل إلى هاتفك',
      did_not_receive_code: 'لم يتم استلام رمز التحقق?'
    },
    applyForProgram: {
      title      : 'ِتأكيد الطلب',
      description: 'برجاء تأكيد طلبك للإنضمام للبرنامج'
    },
    addToDraftModal: {
      title      : 'احفظ طلب التسجيل',
      description: 'you can save your application for later to can complete the process or you compare it with anthor',
      success    : 'تم حفظ الطلب بنجاح',
      error      : 'حصل خطأ أثناء حفظ الطلب'
    },
    partners: {
      title: 'الشركاء'
    },
    completeProfile: {
      title        : 'أكمل تفاصيل الحساب',
      description  : 'املأ الحقول لاستكمال بيانات الحساب',
      note_discount: 'أكمل البيانات المطلوبة واحصل على فرصة للدخول على السحوبات والحسومات خلال فترة المعرض والتسجيل للدخول على سحب المنحة الكاملة!'
    },
    changeMobile: {
      title        : 'تغيير رقم هاتفك المحمول',
      description  : 'املأ الحقل أدناه لتغيير رقم هاتفك المحمول',
      note_discount: 'تغيير رقم هاتفك المحمول'
    },
    forgotPassword: {
      title      : 'نسيت كلمة المرور',
      description: 'أدخل رقم جوالك لاستعادة كلمة المرور'
    },
    resetPassword: {
      title      : 'إستعادة كلمة المرور',
      description: 'أدخل كلمة المرور'
    },
    blog: {
      hero: {
        title      : 'اكتشف مجموعة من المقالات التي تهمك في رحلتك للدراسة في تركيا وقبرص',
        description: 'أهلا بك في المدونة ! نشارك معكم مجموعة واسعة من المقالات والمعلومات التي تهمكم خلال رحلتكم الدراسية للالتحاق بجامعك أحلامكم'
      },
      all            : 'الكل',
      all_blogs      : 'جميع المقالات',
      most_read_blog : 'المقالات الأكثر قراءة',
      see_more       : 'شاهد المزيد',
      search         : 'بحث',
      related_blogs  : 'النتائج المرتبطة بهذا المقال',
      show_last_posts: 'شاهد آخر المقالات'
    },
    faqs: {
      hero: {
        title      : 'الأسئلة الأكثر شيوعا حول الدراسة في تركيا وقبرص ',
        description: 'أجاب مستشارونا الأكاديميين عن أكثر الأسئلة التي سألها طلابنا على مدار سنوات عملنا'
      },
      discover: {
        title      : 'الأسئلة الأكثر شيوعا',
        description: ' اكتشف أكثر الأسئلة التي سألها طلابنا حول اختيار التخصص والجامعة وتفاصيل الجامعات وطرق التقديم وكافة الأسئلة المتعلقة بالسفر إلى تركيا وقبرص'
      }
    },
    study_abroad: {
      main_heading                  : 'لماذا أدرس في  هذه الدولة ؟',
      about_country_title           : 'حول الدولة ',
      cost_living_title             : 'تكاليف المعيشة  ',
      study_advantages_title        : 'أهم ميزات الجامعات',
      document_requirements_title   : 'الأوراق المطلوبة للتسجيل',
      top_programs_title            : 'أفضل البرامج',
      visa_documents_title          : 'الأوراق العامة المطلوبة للتقديم على الفيزا ',
      job_opportunities_title       : 'فرص العمل ',
      faq_title                     : 'الأسئلة الأكثر شيوعا',
      feature_capital               : 'العاصمة',
      feature_census                : 'عدد السكان',
      feature_financial_position    : 'المركز الإقتصادي',
      feature_area                  : 'المساحة',
      feature_time_zone             : 'المنطقة الزمنية',
      feature_official_language     : 'اللغة الرسمية',
      feature_neighbouring_countries: 'الدول المجاورة',
      feature_telephone_code        : 'الرمز الهاتفي',
      feature_currency              : 'العملة',
      feature_living_cost           : 'تكاليف المعيشة',
      meta_description              : 'اجعل رحلتك للدراسة في تركيا وقبرص أسهل مع إدموف'
    },
    partners: {
      title                                      : 'شراكة موثوقة لنمو أسرع',
      description                                : 'صفحة شركاء إدموف',
      main_heading                               : 'شراكة موثوقة لنمو سريع',
      sub_heading                                : 'نؤمن في إدموف أن النجاح مبني على التعاون ولهذا جعلنا أولى أولوياتنا تقديم خدمات عالية الجودة عبر منصة سهلة الاستخدام لشركائنا.نقدم كافة المعلومات اللازمة, الأدوات المساعدة والتطبيقات في مكان واحد لتصبح تجربة شركائنا سهلة و فعالة',
      join_button_text                           : 'انضم لعائلة ادموف',
      cta_text                                   : 'نحن ندرك ونقدر الدور الحاسم الذي تلعبه وكالات الاستشارات التعليمية في نشر الوعي حول قيمة الدراسة في الخارج',
      features_heading                           : 'مفتاح النجاح يكمن في الشريك الصحيح',
      features_subheading                        : 'باستخدام أدواتنا المتميزة والمواكبة للعصر، ستحقق زيادة في الإنتاجية والكفاءة لم يسبق لها مثيل.',
      feature_affordability                      : 'تكاليف معقولة ',
      feature_access_to_hundreds_of_programs     : 'إمكانية الوصول إلى مئات البرامج الجامعية',
      feature_transparent_payments               : 'مدفوعات واضحة',
      feature_seamless_utilization               : 'استخدام سلس',
      feature_continuous_training                : 'تدريب مستمر',
      feature_simplified_complex_logistical_tasks: 'تبسيط المهام اللوجستية المعقدة',
      how_to_join_heading                        : 'كيف يمكنك الانضمام لعائلة إدموف؟',
      how_to_join_subheading                     : 'من خلال الانضمام إلى شبكتنا، سنحظى بفرصة خدمة شريك قيم، حيث سنسعى معًا لتحقيق أهدافنا المشتركة',
      apply_verify_title                         : 'تواصل معنا املأ النموذج ',
      apply_verify_description                   : 'لبدء التواصل مع قسم الشراكات لدينا. ناقش الفوائد التي ستحصل عليها من الانضمام إلى شبكتنا خلال الاجتماع الأول',
      reach_out_title                            : 'التقديم والتحقق',
      reach_out_description                      : 'بعد إكمال عملية التقديم عبر الإنترنت ، سيتواصل معك فريقنا التقني لطلب معلومات عن نشاطك التجاري لإعداد حسابك',
      get_settled_title                          : 'كل شيء مُجهز لك ',
      get_settled_description                    : 'بمجرد التحقق والموافقة، سيتاح لك الدخول والاستفادة من حسابك بشكل كامل حيث يمكنك بدء إدارة طلابك واستخدام أدوات المنصة بسلاسة '
    }
  },
  labels: {
    programs           : 'البرامج',
    universities       : 'الجامعات',
    about              : 'حول',
    address            : 'العنوان',
    top_disciplines    : 'أهم التخصصات',
    university_features: 'ميزات الجامعة',
    gallery            : 'ألبوم الصور',
    Founded            : 'التأسيس'
  },
  validations: {
    required: 'هذا الحقل إلزامي'
  },
  header: {
    study_abroad : 'الدراسة في الخارج',
    discover     : 'اكتشف',
    student_guide: 'دليل الطالب',
    about_us     : 'عن إدموف',
    blog         : 'المدونة',
    faq          : 'الأسئلة الأكثر شيوعا',
    our_story    : 'قصة إدموف',
    contact_us   : 'تواصل معنا',
    My_Account   : 'حسابي',
    Logout       : 'تسجيل الخروج',
    english      : 'english',
    arabic       : 'العربية ',
    accommodation: 'السكنات',
    home         : 'الصفحة الرئيسية'
  },
  personal_details : 'المعلومات الشخصية',
  basic_information: 'البيانات الأساسية',
  first_name       : {
    label: 'الاسم الأول'
  },
  last_name: {
    label: 'الاسم الأخير'
  },
  nationality: {
    label: 'الجنسية'
  },
  email: {
    label: 'البريد الالكتروني'
  },
  passport_number: {
    label: 'رقم جواز السفر'
  },
  mobile: {
    label: 'رقم الهاتف'
  },
  date_of_birth: {
    label: 'تاريخ الميلاد'
  },
  'institute_name.label'             : 'اسم الجامعة',
  'program_name.label'               : 'اسم البرنامج',
  'graduation_status.label'          : 'حالة التخرج',
  'graduation_status.graduated'      : 'متخرج',
  'graduation_status.not graduated'  : 'غير متخرج',
  'graduation_status.under graduated': 'يدرس',
  'graduation_date.label'            : 'تاريخ التخرج',
  'start_date.label'                 : 'تاريخ البدء',
  'gpa.label'                        : 'المعدل التراكمي',
  'country.label'                    : 'الدولة',
  'state.label'                      : 'الولاية',
  'city.label'                       : 'المدينة',
  'Master Degree Information'        : 'ملعلومات درجة الماستر',
  test_lang                          : {
    TOFEL               : 'TOEFL',
    TOMER               : 'TÖMER',
    Reading             : 'القراءة',
    Listening           : 'السماع',
    Speaking            : 'المحادثة',
    Writing             : 'الكتابة',
    overall             : 'المجموع العام',
    'Select Exam Date'  : 'اختيار تاريخ الفحص',
    IELTS               : 'IELTS',
    PTE                 : 'PTE',
    Duolingo            : 'Duolingo',
    'Turkish test Score': 'نتيجة اختبار اللغة التركية'
  },

  dashboard: {
    home: {
      welcome_back    : 'أهلا بك مجددا, ',
      complete_profile: 'استكمال البروفايل',
      discover        : 'اكتشف'
    },
    layouts: {
      home               : 'الرئيسية',
      search_program     : 'البحث عن البرنامج',
      application        : 'طلب التسجيل',
      refer              : 'شارك واكسب',
      notifications      : 'التنبيهات',
      action             : 'إجراء',
      title              : 'العنوان',
      description        : 'الوصف',
      my_application     : 'طلبات التسجيل',
      setting            : 'الإعدادات',
      help_center        : 'مركز المساعدة',
      log_out            : 'تسجيل الخروج',
      month              : 'شهر',
      favourite          : 'المفضلة',
      upload             : 'رفع',
      visa               : 'التأشيرة',
      payment_receipt    : 'وصل الدفع',
      document           : 'الوثائق',
      total              : 'الإجمالي',
      Or                 : 'أو',
      price              : 'الرسوم الدراسية',
      location           : 'الموقع',
      no_results_try_agin: 'لا يوجد نتائج , يرجى تغيير محددات البحث',
      University         : 'الجامعة',
      Program            : 'البرنامج',
      Results            : 'النتائج',
      edit_profile       : 'تعديل الملف الشخصي',
      save               : 'حفظ',
      cancel             : 'إلغاء'
    },
    notification: {
      log_out: 'تم تسجيل الخروج بنجاح'
    },
    student: {
      Passport                         : 'جواز السفر',
      Current_School_Transcript        : ' كشف العلامات الأخير',
      letter_intent                    : 'رسالة الدوافع',
      letter_of_recommendation         : 'رسالة التوصية',
      identity_register                : 'تسجيل الشخصية',
      english_proficiency_certificate  : 'شهادة اللغة الإنجليزية',
      turkish_proficiency_certificate  : 'شهادة اللغة التركية',
      international_examination_results: 'نتيجة الفحص الدولي',
      high_school_diploma              : 'شهادة الثانوية العامة',
      certificate_of_equivalence       : 'معادل الشهادة',
      turkish_identity                 : 'الهوية التركية',
      university_diploma               : 'الشهادة الجامعية',
      note_attach                      : 'يرجى إرفاق الملف لإتمام حسابك والتسجيل على البرامج الجامعية',
      university_transcript            : 'كشف العلامات الجامعي',
      accepted_degree                  : 'الدرجة'
    },
    application: {
      missed_document                 : 'الوثائق اللازم استكمالها',
      application_zero                : 'لا يوجد طلبات تسجيل',
      have_not_program                : 'لا يوجد طلبات تسجيل',
      can_explore                     : 'اكتشف البرامج الدراسية',
      find_scholarship                : 'برنامج متاح للتسجيل',
      explore_now                     : 'اكتشف الآن',
      discover_now                    : 'اكتشف الآن',
      your_passport                   : 'جواز السفر',
      my_applications                 : 'طلبات التسجيل',
      admission_due_date              : 'تاريخ انتهاء القبول',
      already_uploaded_visa           : 'لقد قمت سابقا بإضافة التأشيرة',
      already_uploaded_payment_receipt: 'تم إضافة وصل الدفع',
      Received_Emails                 : 'البريد الوارد',
      accepted_degree                 : 'الدرجة',
      'My Requests'                   : 'طلباتي',
      'discover new programs now'     : 'اكتشف جميع البرامج المتاحة',
    }
  },
  breadcrumb: {
    book_consultation: 'لديك استفسارات ؟ ...لنبدأ التواصل الآن'
  },
  back_to     : 'العودة إلى',
  view_all    : 'عرض الكل',
  view_details: 'تفاصيل البرنامج',
  price       : 'الرسوم السنوية',
  auth        : {
    remember_me        : 'تذكرني',
    have_account       : 'ليس لديك حساب؟',
    do_have_account    : 'هل لديك حساب؟',
    sing_up            : 'التسجيل',
    sign_up_new        : 'إنشاء حساب جديد',
    sign_in            : 'تسجيل الدخول',
    forget_password    : 'نسيت كلمة المرور؟',
    Or                 : 'أو',
    Corporate          : 'شركة',
    Individual         : 'فرد',
    sign_up_as         : 'التسجيل كـ',
    create_account     : 'إنشاء حساب جديد',
    remembered_password: 'تذكرت كلمة المرور؟',
    reset_password     : 'إعادة تعيين كلمة المرور'
  },
  notification: {
    log_out                    : 'تم تسجيل الخروج بنجاح',
    uploaded_successfully      : 'تم التحميل بنجاح',
    applied_successfully       : 'تم التطبيق بنجاح',
    updated_successfully       : 'تم التحديث بنجاح',
    login_successfully         : 'تم تسجيل الدخول بنجاح',
    register_successfully      : 'تم التسجيل بنجاح',
    password_reset_successfully: 'تم إعادة تعيين كلمة المرور بنجاح',
    error_occurred             : 'حدث خطأ',
    mobile_password_error      : 'رقم الهاتف او كلمة المرور غير صحيحة',
    invalid_code               : 'الرمز غير صحيح',
    success                    : 'تمت العملية بنجاح'
  },

  filter: {
    location: {
      title      : 'الدولة',
      placeholder: 'اختر الدولة'
    },
    city: {
      title      : 'المدينة',
      placeholder: 'اختر المدينة'
    },
    gender: {
      title      : 'نوع السكن',
      placeholder: 'اختر نوع السكن'
    },
    room: {
      title      : 'نوع الغرفة',
      placeholder: 'اختر نوع الغرفة'
    },
    reservation: {
      title      : 'نوع الحجز',
      placeholder: 'اختر نوع الحجز'
    },
    program_level: {
      title      : 'الدرجة الدراسية',
      placeholder: 'اختر الدرجة الدراسية'
    },
    language: {
      title      : 'لغة البرنامج',
      placeholder: 'اختر لغة البرنامج'
    },
    Discipline: {
      title      : 'المجال الدراسي',
      placeholder: 'اختر المجال الدراسي'
    },
    tuitionFees: {
      title      : 'الرسوم الدراسية',
      placeholder: 'اختر الرسوم الدراسية'
    },
    university_name: {
      title      : 'اسم الجامعة',
      placeholder: 'اختر اسم الجامعة'
    },
    Intakes: {
      title      : 'الفصل الدراسي',
      placeholder: 'اختر الفصل الدراسي'
    },
    min_fees : 'الحد الادنى',
    max_fees : 'الحد الاقصى',
    clear_all: 'مسح الكل'
  },
  navWhereStudy: {
    whatYouSee: 'ما الذي تراه في هذه الصفحة؟',
    links     : {
      aboutCountry     : 'حول البلد',
      topUniversities  : 'أفضل الجامعات',
      topPrograms      : 'أفضل البرامج',
      costLiving       : 'تكلفة المعيشة',
      howApply         : 'كيفية التقديم',
      documentsRequired: 'الوثائق المطلوبة',
      jobOpportunities : 'فرص العمل بعد التخرج',
      faq              : 'الأسئلة الشائعة',
      otherInformation : 'معلومات أخرى',
      studyAdvantages  : 'مزايا الدراسة في الجامعات',
      visaDocuments    : 'الوثائق للحصول على فيزا'
    }
  },
  required_documents: 'الملفات المطلوبة',
  recommended_blogs : 'مقالات ننصح بها',
  upload_document   : 'رفع المستندات',

                  // lang/ar.js
  HowApply: {
    title      : 'خطوات الدراسة',
    description: 'هنا يمكن معرفة إجراءات التسجيل في الجامعة',
    steps      : [
      {
        title  : 'ابدأ بالبحث والتخطيط',
        image  : '/img/where_study/icon-3.svg',
        details: [
          'حدد التخصص',
          'اختر الجامعة والبرنامج',
          'أتمم طلب التسجيل',
          'احصل على قبولك الجامعي'
        ]
      },
      {
        title  : 'استكمل إجراءات التسجيل',
        image  : '/img/where_study/icon-5.svg',
        details: ['أتمم دفع رسوم التسجيل', 'تقدم للحصول على التأشيرة']
      },
      {
        title  : 'إختر مساحتك، وأنشئ نجاحك',
        image  : '/img/where_study/icon-1.svg',
        details: ['اختر مكان إقامتك', 'إبدأ رحلتك الأكاديمية']
      },
      {
        title  : 'التحق بجامعتك',
        image  : '/img/where_study/icon-2.svg',
        details: [
          ' استكمل أوراق التسجيل في الجامعة واحصل على وثيقة الطالب'
        ]
      },
      {
        title  : 'عيش التجربة',
        image  : '/img/where_study/icon-4.svg',
        details: [' احصل على إذن الإقامة الطلابية وابدأ رحلتك!']
      }
    ],
    paginationSteps: [
      'ابحث',
      'التحق',
      'الإقامة',
      'إتمام التسجيل',
      'الإقامة الطلابية'
    ]
  },
  LearnMore         : 'تعرف على المزيد',
  short_code        : 'الرقم التسلسلي',
  event_time        : 'وقت الفعالية',
  Prize             : 'الجائزة',
  next_round        : 'وقت الجولة القادمة',
  Responsible_person: 'المستشار المسؤول',
  Location          : 'الموقع',
  studying_fields   : {
    art        : 'الفنون، التصميم، العمارة',
    health     : 'العلوم الطبية والصحية',
    english    : 'إدارة الأعمال، الإدارة، الاقتصاد',
    law        : 'العلوم الاجتماعية، القانون، التعليم، اللغات',
    science    : 'العلوم',
    engineering: 'الهندسة والتكنولوجيا'
  },
  application: {
    failed: {
      title      : 'اكتشف برامج أخرى مناسبة لك.',
      description: 'نأسف بأن نخبرك بأنك لم تقبل في هذا البرنامج ولكن لديك الفرصة لتسجل في برامج أخرى <br>',
      Apply      : 'سجل في برنامج آخر'
    },
    initial_applied: {
      title: 'تم استلام طلبك سنقوم بمعالجة الطلب والبدء بعملية التسجيل والانتقال للمرحلة القادمة',
      p_1  : 'إمكانك متابعة حالة طلبك من صفحة طلباتي في حسابك',
      p_2  : 'يرجى الإنتظار ريثما يتم المعالجة ويتم نقلة للمرحلة القادمة!'
    }
  },
  wizard: {
    title: 'يرجى الإجابة على الأسئلة لنساعدك في فهم طلبك أفضل.'
  },
  search_by_name: 'بحث بالاسم',

  Passport                          : 'جواز السفر',
  Current_School_Transcript         : ' كشف العلامات الأخير',
  letter_intent                     : 'رسالة الدوافع',
  letter_of_recommendation          : 'رسالة التوصية',
  identity_register                 : 'تسجيل الشخصية',
  english_proficiency_certificate   : 'شهادة اللغة الإنجليزية',
  turkish_proficiency_certificate   : 'شهادة اللغة التركية',
  international_examination_results : 'نتيجة الفحص الدولي',
  high_school_diploma               : 'شهادة الثانوية العامة',
  certificate_of_equivalence        : 'معادل الشهادة',
  turkish_identity                  : 'الهوية التركية',
  university_diploma                : 'الشهادة الجامعية',
  note_attach                       : 'يرجى إرفاق الملف لإتمام حسابك والتسجيل على البرامج الجامعية',
  university_transcript             : 'كشف العلامات الجامعي',
  notification_center               : 'مركز الإشعارات',
  university_programs               : 'برامج الجامعة',
  login_with_google                 : 'الدخول بحساب جوجل',
  login_with_facebook               : 'الدخول بحساب فيسبوك',
  Establishment                     : 'تاريخ التأسيس',
  Number_Courses                    : 'عدد الدورات',
  Cost_Living                       : 'تكلفة المعيشة',
  tuition_cost                      : 'تكلفة الرسوم الدراسية',
  'Similar Program'                 : 'البرامج المشابهة',
  'Spring , Fall'                   : 'الربيع ، الخريف',
  'Number of Courses'               : 'عدد الدورات',
  'Cost of Living'                  : 'تكلفة المعيشة',
  'tuition cost'                    : 'متوسط الرسوم الدراسية',
  About                             : 'حول',
  'Founded '                        : 'تأسست ',
  'Top disciplines'                 : 'أفضل التخصصات',
  Gallery                           : 'معرض الصور',
  Address                           : 'العنوان',
  'accommodation '                  : 'الإقامة',
  'Partner Accommodation'           : 'الإقامة الشريكة',
  FAQ                               : 'الأسئلة الشائعة',
  'similar university'              : 'جامعة مشابهة',
  'University Features'             : 'ميزات الجامعة',
  'Top disciplines'                 : 'أفضل التخصصات',
  'List of States'                  : 'قائمة الدول التي تعترف بالجامعة',
  Gallery                           : 'معرض الصور',
  Accommodation                     : 'الإقامة',
  'off campus student accommodation': 'الإقامة الطلابية خارج الحرم الجامعي',
  'off campus private accommodation': 'الإقامة الخاصة خارج الحرم الجامعي',
  'university student accommodation': 'الإقامة الطلابية داخل الحرم الجامعي',
  Accommodation                     : 'الإقامة',
  'Establishment Date'              : 'تاريخ التأسيس',
  Number_Courses                    : 'عدد الدورات',
  Cost_Living                       : 'تكلفة المعيشة',
  tuition_cost                      : 'متوسط الرسوم الدراسية',
  'tuition Fee'                     : 'تكلفة التعليم',
  'tuition before discount'         : 'الرسوم قبل الخصم',
  accepted_degree                   : 'الدرجة المقبولة',
  top_program                       : 'أفضل برنامج',
  'About Program'                   : 'حول البرنامج',
  'Submission End Date'             : 'تاريخ انتهاء التقديم',
  month                             : 'شهر',
  Duration                          : 'مدة الدراسة',
  Degree                            : 'الدرجة',
  Degree_level                      : ' المستوى الدراسي',
  intake                            : 'القبول',
  'Program summary'                 : 'ملخص البرنامج',
  Language                          : 'اللغة',
  'Recognizing the Program from'    : 'البرنامج معتمد من :',

  cash_payment_fees        : 'رسوم الدفع نقدًا',
  acceptance_deposit_amount: 'قيمة الدفعة الأولية',
  prep_school_fees         : 'رسوم السنة التحضيرية',
  cost_after_discount      : 'الرسوم بعد الحسم',

  pending                           : 'قيد الانتظار',
  verified                          : 'تم التحقق',
  rejected                          : 'مرفوض',
  required                          : 'مطلوب',
  filters                           : 'الفلاتر',
  passport_required                 : 'جواز السفر مطلوب',
  upload_passport                   : 'رفع جواز السفر',
  upload_current_school_transcript  : 'رفع كشف الدرجات',
  current_school_transcript_required: 'كشف الدرجات  مطلوب',
  uploading                         : 'جارٍ الرفع',
  current_school_transcript         : 'كشف الدرجات',
  sort                              : 'التصنيف',
  'Tuition cost high - low'         : ' الرسوم من الأعلى إلى الأدنى',
  'Tuition cost low - high'         : ' الرسوم من الأدنى إلى الأعلى',

  ourstory: {
    hero: {
      title      : 'كل ما تحتاج معرفته عن الدراسة في الخارج ',
      description: 'أهلا بك في دليل ادموف تصفح مجموعة واسعة من المقالات والمعلومات التي تهمك خلال رحلتك الدراسية للوصول إلى جامعة أحلامك .',
    },
    missionsec: {
      title         : '',
      vision        : 'رؤيتنا',
      vision_title  : 'تمكين كل طالب من الوصول إلى فرصته التعليمية الأمثل',
      mission       : 'مهمتنا',
      mission_title : 'تسهيل عملية التقديم على الجامعات الدولية عبر أدوات مدعومة بالذكاء الاصطناعي ',
      identity      : 'هويتنا',
      identity_title: 'ادموف هي منصة ذكية لإدارة طلبات القبول الجامعي بكفاءة وسهولة  من التقديم إلى تتبّع الطلبات والتحقق من الوثائق  ضمن تجربة موحدة وسلسة تعتمد على تقنيات حديثة وتحليل البيانات لتقديم قبول دقيق وفعّال.',
    },
    values: {
      title     : 'قيمنا:',
      categories: [
        {
          title      : 'العلم رسالة نبيلة',
          description: 'نؤمن بأن العلم رسالة نبيلة والدراسة في الخارج تساهم في نشر هذه الرسالة حول العالم.'
        },
        {
          title      : 'تعليم عالي الجودة',
          description: 'من خلال توفير أفضل البرامج من الجامعات الرائدة حول العالم تحرص إدموف على حصول الطلاب على أفضل نتائج.'
        },
        {
          title      : 'الطلاب للطلاب',
          description: 'نؤمن أن الطلاب الذين خاضوا التجربة سابقاً ونجحوا بها هم الأكثر كفاءة لمساعدة الطلاب الباحثين عن وجهة دراسية جديدة لذلك أغلب فريق إدموف الاستشاري هم طلاب نجحوا في تجاربهم في الدراسة في الخارج.'
        },
        {
          title      : 'العمل بشغف',
          description: 'يعمل فريق إدموف بشغف واهتمام وخبرة، بمتابعة كل تفاصيل عملية الدراسة في الخارج وتطوير الوسائل المناسبة لجعلها سهلة وممتعة.'
        },
        {
          title      : 'المرونة',
          description: 'نفتخر بالقدرة على التكيف مع التطورات المستمرة في مجال التعليم والتعلم من التجارب السابقة.'
        },
        {
          title      : 'المواكبة',
          description: 'تسعى إدموف بتقديم الخدمة بشكل يلائم العصر حيث يمكن للطلاب باستخدام دعم الذكاء الاصطناعي تسهيل عملية المقارنة والبحث والتقديم والمتابعة.'
        }
      ]
    }
  },

  ourStory: {
    items: [
      {
        number : 1,
        title  : 'بداية الرحلة 2019',
        details: 'بدأت إدموف تحت مظلة مجموعة ديدن القابضة، حيث قدمت خدماتها للطلاب على مستوى تركيا وقبرص باسم قبول ترك، وأتاحت لأكثر من 25,000 طالب فرصًا تعليمية متنوعة.'
      },
      {
        number : 2,
        title  : 'عام 2020: التحديات',
        details: 'تكيفت إدموف مع التحديات الناجمة عن جائحة كورونا بتقديم خدماتها الاستشارية أونلاين وتوسيع شبكتها العالمية من الشركاء.'
      },
      {
        number : 3,
        title  : 'منصة إدموف ..التغيير يبدأ من الحاجة',
        details: 'في عام 2023، بدأت إدموف في تفكيرها حول تقديم خدماتها من خلال منصة تكنولوجية باستخدام الذكاء الاصطناعي. وقام الفريق بالدراسات والتحضيرات والتجارب المختلفة قبل الإعلان عن جهوزية المنصة بنهاية 2023.'
      },
      {
        number : 4,
        title  : 'عام 2024: الانطلاقة وحلم التغيير',
        details: 'أطلقت إدموف النسخة الأولى من منصتها في عام 2024، وبدأت بتقديم خدمات تعليمية شاملة ومبتكرة.'
      },
      {
        number : 5,
        title  : '2024 وما بعدها',
        details: 'تستمر إدموف في تطوير وتحسين منصتها لتحقيق رؤيتها للعام 2025 وما بعده، حيث تظل ملتزمة بتمكين التعليم وخدمة الطلاب بشكل أفضل.'
      }
    ]
  },
  'our partners'           : 'شركاؤنا',
  'meet our amazing team'  : 'فريق إدموف',
  'our Stories'            : 'قصتنا',
  'Sign up as a corporate' : 'سجل كشركة',
  'Sign up as a individual': 'سجل كفرد',
  edit                     : 'عدَّل',
  'per year'               : 'سنوياً',
  no_result                : 'لا توجد نتائج',
  Search_universities      : 'ابحث عن الجامعة ...',
  team                     : [
    {
      name: 'المقداد السلمي',
      job : 'مدير التطوير',
      img : '/img/our_story/team2.jpg'
    },
    {
      name: 'عبدالله ديار بكرلي',
      job : 'المدير التنفيذي',
      img : '/img/our_story/team1.jpg'
    },
    {
      name: 'منذر المصري',
      job : 'مدير المنتج',
      img : '/img/our_story/team3.jpg'
    },
    {
      name: 'زيد ديار بكرلي',
      job : 'مدير الايرادات',
      img : '/img/our_story/team4.jpg'
    }
  ],
  'Already Applied': 'تم التقديم عليه',
  stages           : {
    initial_apply             : 'تم استلام طلب التسجيل',
    in_progress               : 'الطلب قيد المعالجة',
    post_decision_requirements: 'يوجد متطلبات إضافية',
    acceptance_letter         : 'تم إصدار القبول',
    waiting_payment           : ' تم استلام إيصال الدفع ',
    final_acceptance          : 'تم إصدار القبول النهائي',
    enrolled                  : 'إكتملت عملية التسجيل'
  },
  language_filter: 'لغة',
  country_filter : 'دولة',
  degree_filter  : 'درجة',
  acceptance_file: 'ملف القبول الجامعي',
  discount       : {
    title      : 'خصومات إدموف',
    description: 'ابحث وسجل لوحدك! واحصل على خصم إضافي بقيمة 250 دولار',
    modal      : {
      title          : 'خصومات <br> إدموف',
      description1   : 'ابحث وسجل لوحدك واحصل على خصم إضافي بقيمة <span>250 دولار</span>',
      description2   : 'ستحصل على خصوماتك الخاصة بكل خطوة من خطوات التسجيل',
      button         : 'انضم الآن',
      Congrats       : 'تهانينا',
      'Congrats-tile': 'تهانينا لقد حصلت على خصومات إدموف الإضافية بقيمة <span>250</span>$',
      step           : ' بكل خطوة خصم ',
      'step-tile'    : 'ارفع أوراقك وقدم لتحصل على الخصم الإضافي الثاني بقيمة <span>150</span> دولارا'
    }
  },
  open_file         : 'تصفح الملف',
  application_stages: {
    initial_apply: {
      title      : 'تم الاستلام',
      title_stage: 'تم الاستلام',
      description: 'تم استلام طلبك! ستصلك تحديثات حول حالة طلبك بشكل دوري.'
    },
    in_progress: {
      title      : 'جار التقييم',
      title_stage: 'جار التقييم',
      description: 'يجري تقييم ملفك حالياً من قبل الجامعة. ابقى مستعداً للخطوة التالية.'
    },
    missing_document: {
      title      : 'طلبات إضافية من الجامعة',
      title_stage: 'طلبات إضافية من الجامعة',
      description: 'جامعتك طلبت أوراق إضافية لاستكمال التقييم. يرجى رفع الوثائق في أقرب وقت ممكن حتى نتمكن من متابعة الطلب.'
    },
    rejected_application: {
      title      : 'تم رفض طلبك',
      title_stage: 'تم رفض طلبك',
      description: 'للأسف، لم يتم قبولك في هذا البرنامج بعد تقييم طلبك من قبل الجامعة. يمكنك البحث والتسجيل في برامج أخرى تناسبك.'
    },
    program_quota_full: {
      title      : 'البرنامج مكتمل العدد',
      title_stage: 'البرنامج مكتمل العدد',
      description: 'للأسف، لا توجد أماكن شاغرة في هذا البرنامج حالياً. نوصيك بالتسجيل في برنامج آخر.'
    },
    already_has_application: {
      title      : 'مسجل مسبقاً',
      title_stage: 'مسجل مسبقاً',
      description: 'يوجد لديك طلب مسبق لنفس البرنامج. لإكمال العملية، يرجى التواصل مع قسم الدعم.'
    },
    acceptance_letter: {
      title      : 'القبول المبدئي',
      title_stage: 'القبول المبدئي',
      description: 'تهانينا! لقد تم قبولك في هذا البرنامج من قبل الجامعة. الآن يمكنك إتمام الدفع ورفع الإيصال لإتمام عملية التسجيل.'
    },
    conditional_acceptance: {
      title      : 'القبول المبدئي',
      title_stage: 'القبول المبدئي',
      description: 'تهانينا! لقد تم قبولك في هذا البرنامج من قبل الجامعة. الآن يمكنك إتمام الدفع ورفع الإيصال لإتمام عملية التسجيل.'
    },
    waiting_payment: {
      title      : 'تنبيه: لا تنسى رفع إيصال الدفع',
      title_stage: 'تنبيه: لا تنسى رفع إيصال الدفع',
      description: 'لإكمال عملية التسجيل، نود تذكيرك بتحميل إيصال الدفع ليتم قبولك بشكل نهائي في الجامعة قبل انتهاء مدة القبول المبدئي.'
    },
    official_acceptance: {
      title      : 'القبول النهائي',
      title_stage: 'القبول النهائي',
      description: 'تهانينا! لقد صدر القبول النهائي من الجامعة. استعد لتبدأ أولى خطواتك في حياتك الأكاديمية. يمكنك الآن رفع وثيقة الطالب بعد التثبيت في الجامعة لتحصل على خصومات المنصة المستحقة.'
    },
    final_acceptance: {
      title      : 'القبول النهائي',
      title_stage: 'القبول النهائي',
      description: 'تهانينا! لقد صدر القبول النهائي من الجامعة. استعد لتبدأ أولى خطواتك في حياتك الأكاديمية. يمكنك الآن رفع وثيقة الطالب بعد التثبيت في الجامعة لتحصل على خصومات المنصة المستحقة.'
    },
    enrolled: {
      title      : 'تم إكمال التسجيل',
      title_stage: 'تم إكمال التسجيل',
      description: 'الشغف، والصبر، والإصرار هو كل ما تحتاجه لبدء حياة أكاديمية ناجحة. فريق إدموف يتمنى لك التوفيق والنجاح في رحلتك الجامعية. لا تنسى أنك الآن جزء من عائلة إدموف، وسندك في كل خطوة خلال رحلتك.'
    },
    students_payment_received: {
      title      : 'تم استلام دفع الطالب',
      title_stage: 'تم استلام دفع الطالب',
      description: ''
    },
    post_decision_requirements: {
      title      : 'متطلبات ما بعد القرار',
      title_stage: 'متطلبات ما بعد القرار',
      description: 'الجامعة قد تتطلب منك إتمام بعض الإجراءات بعد القبول. يرجى متابعة التعليمات لإكمال متطلباتك.'
    },
    reminder_extending_letter: {
      title      : 'تنبيه: لا تنسى رفع إيصال الدفع',
      title_stage: 'تنبيه: لا تنسى رفع إيصال الدفع',
      description: ''
    },
    regarding_your_payment: {
      title      : 'متطلبات ما بعد القرار',
      title_stage: 'متطلبات ما بعد القرار',
      description: ''
    }, 
    undefined: {
      title      : 'متطلبات ما بعد القرار',
      title_stage: 'متطلبات ما بعد القرار',
      description: 'الجامعة قد تتطلب منك إتمام بعض الإجراءات بعد القبول. يرجى متابعة التعليمات لإكمال متطلباتك.'
    }
  },
  'Requirement' : 'متطلبات إضافية',
  'open_file'   : 'تصفح الملف',
  congratulation: {
    modal: {
      title      : 'تهانينا!',
      description: 'لقد تم قبولك في الجامعة التي تقدمت إليها، يمكنك الآن رفع إيصال الدفع.'
    }
  },
  reminder: {
    modal: {
      title      : 'تذكير !',
      description: 'يمكنك الآن رفع إيصال الدفع لإكمال العملية.',
    }
  },
"help_with_preferences": "دع إدموف يساعدك في تفضيلاتك خلال عملية البحث عن الجامعة والبرنامج المناسب لك",
"choose_discipline"    : "اختر تخصصك وابدأ رحلة التعلم الآن",
"discover_universities": "اكتشف الجامعات",
"Choosing Your Major"  : "اختيار تخصصك",
"Recommended Programs" : "البرامج المقترحة",
accommodation          : {
    title           : 'الإقامة',
    room_summary    : 'ملخص الغرفة',
    room_about      : 'عن الغرفة',
    about_room      : 'عن الغرفة',
    housing_fee     : 'رسوم السكن',
    room_type       : 'نوع الغرفة',
    reservation_type: 'نوع الحجز',
    floor           : 'الطابق',
    area            : 'المساحة',
    capacity        : 'السعة',
    available_from  : 'متاح من',
    available_to    : 'متاح حتى',
    contract_type   : 'نوع العقد',
    price           : 'السعر',
    deposit         : 'التأمين',
    size            : 'المساحة',
    availability    : 'التوفر',
    location        : 'العنوان',
    available_from  : 'متاحة منذ',
},
Similar_Room        : 'غرف مشابهة',
nearest_universities: 'أقرب الجامعات إلى السكن',
facilities          : 'المرافق',
reservationTypes    : 'أنواع الحجز',
genders             : 'الجنس',
}
