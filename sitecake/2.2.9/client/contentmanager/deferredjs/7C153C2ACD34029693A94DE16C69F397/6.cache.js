var $intern_2539 = '<\/strong> er for stor til at blive uploadet (', $intern_2542 = '<\/strong> kan ikke uploades pga. filtypen.', $intern_2541 = '<strong>', $intern_2558 = 'AsyncLoader6', $intern_2538 = 'Den valgte fil <strong>', $intern_2536 = 'Der er problemer med parametrene i konfigurationen af SiteCake. Der er problemer med <strong>', $intern_2532 = 'Der er sket en fejl mens du pr\u017Cvede at gemme indholdet - pr\u017Cver igen...', $intern_2533 = 'Der er sket en fejl under udgivelsen af hjemmesiden.', $intern_2534 = 'Der opstod en fejl ved upload af en fil.', $intern_2555 = 'Der opstod en ukendt fejl.', $intern_2530 = 'Der opstod et problem med SiteCake!', $intern_2540 = 'Der opstod et problem med filen du vil uploade: ', $intern_2528 = 'Du mangler at gemme dine \u013Endringer - vil du forts\u013Ette?', $intern_2535 = 'Efter flere fors\u017Cg kunne hjemmesiden stadig ikke uploades - pr\u017Cv igen senere.', $intern_2557 = 'En ny version af SiteCake er klar til download <a href=http://sitecake.com/download.html target=_blank>Hent den her<\/a> (', $intern_2531 = 'Fort\u013El os om problemet og hj\u013Elp til at g\u017Cre SiteCake bedre.  <a target="_blank" href="http://support.sitecake.com/anonymous_requests/new">Skriv til os her<\/a> (Engelsk). Inkluder venligst den nedenst\u015Aende rapport. \u017Bnsker du at fors\u013Ette med at redigere, s\u015A  <a href="javascript:location.reload()">updater siden<\/a>.', $intern_2546 = 'Klik her for at inds\u013Ette en Flash-fil', $intern_2549 = 'Klik her for at inds\u013Ette en video', $intern_2548 = 'Klik her for at inds\u013Ette kode fra Google Maps', $intern_2547 = 'Klik her for at tilf\u017Cje HTML kode', $intern_2544 = 'Klik her for at tilf\u017Cje tekst', $intern_2537 = 'Kortet kunne ikke oprettes pga. fejl i koden/URL\u2019en.', $intern_2545 = 'L\u013Es mere', $intern_2559 = 'MessagesDk_', $intern_2529 = 'Standard style', $intern_2556 = 'Uploader:', $intern_2543 = 'Videoen kunne ikke inds\u013Ettes pga. problemer med koden eller URL\u2019en.', $intern_2553 = 'V\u013Elg billede(r) du vil uploadee', $intern_2552 = 'V\u013Elg fil(er) du vil uploade', $intern_2551 = 'V\u013Elg hvilke(t) lydklip du vil uploade', $intern_2554 = 'V\u013Elg video(er) du vil uploade', $intern_2527 = 'runCallbacks6';
function com_google_gwt_lang_asyncloaders_AsyncLoader6_$runCallbacks__Lcom_google_gwt_lang_asyncloaders_AsyncLoader6_2V(){
  var $e0, e, handler, next;
  while (com_google_gwt_lang_asyncloaders_AsyncLoader6_callbacksHead) {
    handler = com_google_gwt_core_client_GWT_sUncaughtExceptionHandler;
    next = com_google_gwt_lang_asyncloaders_AsyncLoader6_callbacksHead;
    com_google_gwt_lang_asyncloaders_AsyncLoader6_callbacksHead = com_google_gwt_lang_asyncloaders_AsyncLoader6_callbacksHead.com_google_gwt_lang_asyncloaders_AsyncLoader6_1_1Callback_next;
    !com_google_gwt_lang_asyncloaders_AsyncLoader6_callbacksHead && (com_google_gwt_lang_asyncloaders_AsyncLoader6_callbacksTail = null);
    if (!handler) {
      com_sitecake_contentmanager_client_resources_LocaleProxyImpl$6_$onSuccess__Lcom_sitecake_contentmanager_client_resources_LocaleProxyImpl$6_2V(next.com_google_gwt_lang_asyncloaders_AsyncLoader6_1_1Callback_callback);
    }
     else {
      try {
        com_sitecake_contentmanager_client_resources_LocaleProxyImpl$6_$onSuccess__Lcom_sitecake_contentmanager_client_resources_LocaleProxyImpl$6_2V(next.com_google_gwt_lang_asyncloaders_AsyncLoader6_1_1Callback_callback);
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ($e0, 67)) {
          e = $e0;
          handler.onUncaughtException__Ljava_lang_Throwable_2V(e);
        }
         else 
          throw $e0;
      }
    }
  }
}

function com_google_gwt_lang_asyncloaders_AsyncLoader6_AsyncLoader6__V(){
}

function com_google_gwt_lang_asyncloaders_AsyncLoader6_onLoad__V(){
  com_google_gwt_lang_asyncloaders_AsyncLoader6_instance = new com_google_gwt_lang_asyncloaders_AsyncLoader6_AsyncLoader6__V;
  com_google_gwt_core_client_impl_AsyncFragmentLoader_$fragmentHasLoaded__Lcom_google_gwt_core_client_impl_AsyncFragmentLoader_2IV((com_google_gwt_core_client_impl_AsyncFragmentLoader_$clinit__V() , com_google_gwt_core_client_impl_AsyncFragmentLoader_BROWSER_1LOADER), 6);
  !!$stats && $stats(com_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_$createStatsEvent__Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_2Ljava_lang_String_2Ljava_lang_String_2IILcom_google_gwt_core_client_JavaScriptObject_2($intern_2527, $intern_149, -1, -1));
  com_google_gwt_lang_asyncloaders_AsyncLoader6_instance.runCallbacks__V();
  !!$stats && $stats(com_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_$createStatsEvent__Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_2Ljava_lang_String_2Ljava_lang_String_2IILcom_google_gwt_core_client_JavaScriptObject_2($intern_2527, $intern_2351, -1, -1));
}

function com_google_gwt_lang_asyncloaders_AsyncLoader6(){
}

_ = com_google_gwt_lang_asyncloaders_AsyncLoader6_AsyncLoader6__V.prototype = com_google_gwt_lang_asyncloaders_AsyncLoader6.prototype = new java_lang_Object;
_.getClass__Ljava_lang_Class_2$ = function com_google_gwt_lang_asyncloaders_AsyncLoader6_getClass__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1asyncloaders_1AsyncLoader6_12_1classLit;
}
;
_.runCallbacks__V = function com_google_gwt_lang_asyncloaders_AsyncLoader6_runCallbacks__V(){
  com_google_gwt_lang_asyncloaders_AsyncLoader6_$runCallbacks__Lcom_google_gwt_lang_asyncloaders_AsyncLoader6_2V();
}
;
_.java_lang_Object_castableTypeMap$ = {};
function com_sitecake_contentmanager_client_resources_LocaleProxyImpl$6_$onSuccess__Lcom_sitecake_contentmanager_client_resources_LocaleProxyImpl$6_2V(this$static){
  this$static.com_sitecake_contentmanager_client_resources_LocaleProxyImpl$6_this$0.com_sitecake_contentmanager_client_resources_LocaleProxyImpl_messages = new com_sitecake_contentmanager_client_resources_MessagesDk_1_MessagesDk_1__V;
  com_sitecake_commons_client_util_SynchronizationBarrier_$release__Lcom_sitecake_commons_client_util_SynchronizationBarrier_2V(this$static.com_sitecake_contentmanager_client_resources_LocaleProxyImpl$6_this$0.com_sitecake_contentmanager_client_resources_LocaleProxyImpl_synchronizationBarrier);
}

function com_sitecake_contentmanager_client_resources_MessagesDk_1_MessagesDk_1__V(){
}

function com_sitecake_contentmanager_client_resources_MessagesDk_1(){
}

_ = com_sitecake_contentmanager_client_resources_MessagesDk_1_MessagesDk_1__V.prototype = com_sitecake_contentmanager_client_resources_MessagesDk_1.prototype = new java_lang_Object;
_.confirmUnsafeLogout__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_confirmUnsafeLogout__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2528).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.defaultStyle__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_defaultStyle__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2529).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.errorMessage1__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_errorMessage1__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2530).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.errorMessage2__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_errorMessage2__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2531).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.failedAttemptToSaveContent__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_failedAttemptToSaveContent__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2532).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.failedToPublishContent__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_failedToPublishContent__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2533).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.failedToUploadFiles__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_failedToUploadFiles__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2534).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.getClass__Ljava_lang_Class_2$ = function com_sitecake_contentmanager_client_resources_MessagesDk_1_getClass__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1sitecake_1contentmanager_1client_1resources_1MessagesDk_11_12_1classLit;
}
;
_.giveUpContentSaving__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_giveUpContentSaving__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2535).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.invalidConfigParameter__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_invalidConfigParameter__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(arg0, arg1){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2536), arg0), $intern_163), arg1), $intern_2361).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.invalidMapInputCode__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_invalidMapInputCode__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2537).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.invalidServiceResponse__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_invalidServiceResponse__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2363).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.invalidUploadFileMaxSize__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_invalidUploadFileMaxSize__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(arg0, arg1){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2538), arg0), $intern_2539), arg1), $intern_2366).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.invalidUploadFileSelection__Ljava_lang_String_2Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_invalidUploadFileSelection__Ljava_lang_String_2Ljava_lang_String_2(arg0){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2540), arg0), $intern_281).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.invalidUploadFileType__Ljava_lang_String_2Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_invalidUploadFileType__Ljava_lang_String_2Ljava_lang_String_2(arg0){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2541), arg0), $intern_2542).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.invalidVideoInputCode__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_invalidVideoInputCode__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2543).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.linkEditorMailtoLink__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_linkEditorMailtoLink__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2443).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.linkEditorWebLink__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_linkEditorWebLink__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2444).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.newTextItemDefaultContent__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_newTextItemDefaultContent__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2544).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.notificationDialogReadMore__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_notificationDialogReadMore__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2545).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.pasteFlash__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_pasteFlash__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2546).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.pasteHtml__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_pasteHtml__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2547).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.pasteMap__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_pasteMap__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2548).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.pasteVideo__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_pasteVideo__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2549).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.publishButton__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_publishButton__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2550).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.selectFilesToUploadAudio__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_selectFilesToUploadAudio__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2551).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.selectFilesToUploadGeneric__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_selectFilesToUploadGeneric__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2552).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.selectFilesToUploadImage__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_selectFilesToUploadImage__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2553).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.selectFilesToUploadVideo__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_selectFilesToUploadVideo__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2554).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.uncaughtException__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_uncaughtException__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2555).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.uploadingFiles__Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_uploadingFiles__Ljava_lang_String_2(){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2556).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.versionUpdateMessage__Ljava_lang_String_2Ljava_lang_String_2 = function com_sitecake_contentmanager_client_resources_MessagesDk_1_versionUpdateMessage__Ljava_lang_String_2Ljava_lang_String_2(arg0){
  return java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(java_lang_StringBuffer_$append__Ljava_lang_StringBuffer_2Ljava_lang_String_2Ljava_lang_StringBuffer_2(new java_lang_StringBuffer_StringBuffer__V, $intern_2557), arg0), $intern_2366).java_lang_StringBuffer_impl.com_google_gwt_core_client_impl_StringBufferImplAppend_string;
}
;
_.java_lang_Object_castableTypeMap$ = {};
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1asyncloaders_1AsyncLoader6_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1724, $intern_2558), com_google_gwt_lang_ClassLiteralHolder_Lcom_1sitecake_1contentmanager_1client_1resources_1MessagesDk_11_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2112, $intern_2559);
$entry(com_google_gwt_lang_asyncloaders_AsyncLoader6_onLoad__V)();
