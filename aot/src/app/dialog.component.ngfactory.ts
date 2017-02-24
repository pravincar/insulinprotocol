/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/app/dialog.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/material/button/button';
import * as import9 from '../../node_modules/@angular/material/core/compatibility/compatibility.ngfactory';
import * as import10 from '../../node_modules/@angular/material/button/button.ngfactory';
import * as import11 from '../../node_modules/@angular/material/dialog/dialog-content-directives.ngfactory';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '@angular/core/src/change_detection/change_detection_util';
import * as import14 from '@angular/material/core/compatibility/compatibility';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '@angular/material/dialog/dialog-ref';
import * as import17 from '@angular/material/dialog/dialog-content-directives';
import * as import18 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/common/src/directives/ng_if';
export class Wrapper_DialogDisplay {
  /*private*/ _eventHandler:Function;
  context:import0.DialogDisplay;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.DialogDisplay();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_DialogDisplay_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_DialogDisplay_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.DialogDisplay>;
  _DialogDisplay_0_3:Wrapper_DialogDisplay;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DialogDisplay_Host0,renderType_DialogDisplay_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ng-component',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_DialogDisplay0(this.viewUtils,this,0,this._el_0);
    this._DialogDisplay_0_3 = new Wrapper_DialogDisplay();
    this.compView_0.create(this._DialogDisplay_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._DialogDisplay_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.DialogDisplay) && (0 === requestNodeIndex))) { return this._DialogDisplay_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._DialogDisplay_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const DialogDisplayNgFactory:import7.ComponentFactory<import0.DialogDisplay> = new import7.ComponentFactory<import0.DialogDisplay>('ng-component',View_DialogDisplay_Host0,import0.DialogDisplay);
const styles_DialogDisplay:any[] = ([] as any[]);
class View_DialogDisplay1 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import8.MdButton>;
  _MdPrefixRejector_0_3:import9.Wrapper_MdPrefixRejector;
  _MdButton_0_4:import10.Wrapper_MdButton;
  _MdButtonCssMatStyler_0_5:import10.Wrapper_MdButtonCssMatStyler;
  _MdDialogClose_0_6:import11.Wrapper_MdDialogClose;
  _text_1:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_DialogDisplay1,renderType_DialogDisplay,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_7 = import13.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'button',new import3.InlineArray8(6,'md-button','','md-dialog-close','','type','button'),(null as any));
    this.compView_0 = new import10.View_MdButton0(this.viewUtils,this,0,this._el_0);
    this._MdPrefixRejector_0_3 = new import9.Wrapper_MdPrefixRejector(this.parentView.parentView.injectorGet(import14.MATERIAL_COMPATIBILITY_MODE,this.parentView.parentIndex,(null as any)));
    this._MdButton_0_4 = new import10.Wrapper_MdButton(new import15.ElementRef(this._el_0),this.renderer);
    this._MdButtonCssMatStyler_0_5 = new import10.Wrapper_MdButtonCssMatStyler();
    this._MdDialogClose_0_6 = new import11.Wrapper_MdDialogClose(this.parentView.parentView.injectorGet(import16.MdDialogRef,this.parentView.parentIndex));
    this._text_1 = this.renderer.createText((null as any),'',(null as any));
    this.compView_0.create(this._MdButton_0_4.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray8(8,'mousedown',(null as any),'focus',(null as any),'blur',(null as any),'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.MdPrefixRejector) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._MdPrefixRejector_0_3.context; }
    if (((token === import8.MdButton) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._MdButton_0_4.context; }
    if (((token === import8.MdButtonCssMatStyler) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._MdButtonCssMatStyler_0_5.context; }
    if (((token === import17.MdDialogClose) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._MdDialogClose_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._MdPrefixRejector_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    if (this._MdButton_0_4.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this._MdButtonCssMatStyler_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    this._MdDialogClose_0_6.ngDoCheck(this,this._el_0,throwOnChange);
    this._MdButton_0_4.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this._MdButtonCssMatStyler_0_5.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this._MdDialogClose_0_6.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    const currVal_7:any = import3.inlineInterpolate(1,'',this.parentView.context.close,'');
    if (import3.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setText(this._text_1,currVal_7);
      this._expr_7 = currVal_7;
    }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) { cb(this._text_1,ctx); }
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_0_4.handleEvent(eventName,$event) && result);
    result = (this._MdDialogClose_0_6.handleEvent(eventName,$event) && result);
    return result;
  }
}
var renderType_DialogDisplay:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_DialogDisplay,{});
export class View_DialogDisplay0 extends import1.AppView<import0.DialogDisplay> {
  _text_0:any;
  _el_1:any;
  _MdPrefixRejector_1_3:import9.Wrapper_MdPrefixRejector;
  _MdDialogTitle_1_4:import11.Wrapper_MdDialogTitle;
  _text_2:any;
  _text_3:any;
  _el_4:any;
  _MdPrefixRejector_4_3:import9.Wrapper_MdPrefixRejector;
  _MdDialogContent_4_4:import11.Wrapper_MdDialogContent;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _MdPrefixRejector_7_3:import9.Wrapper_MdPrefixRejector;
  _MdDialogActions_7_4:import11.Wrapper_MdDialogActions;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _vc_9:import12.ViewContainer;
  _TemplateRef_9_5:any;
  _NgIf_9_6:import18.Wrapper_NgIf;
  _text_10:any;
  _text_11:any;
  /*private*/ _expr_21:any;
  /*private*/ _expr_22:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DialogDisplay0,renderType_DialogDisplay,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_21 = import13.UNINITIALIZED;
    this._expr_22 = import13.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n		',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'h2',new import3.InlineArray2(2,'md-dialog-title',''),(null as any));
    this._MdPrefixRejector_1_3 = new import9.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import14.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdDialogTitle_1_4 = new import11.Wrapper_MdDialogTitle();
    this._text_2 = this.renderer.createText(this._el_1,'',(null as any));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n		',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,parentRenderNode,'md-dialog-content',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._MdPrefixRejector_4_3 = new import9.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import14.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdDialogContent_4_4 = new import11.Wrapper_MdDialogContent();
    this._text_5 = this.renderer.createText(this._el_4,'',(null as any));
    this._text_6 = this.renderer.createText(parentRenderNode,'\n		',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,parentRenderNode,'md-dialog-actions',new import3.InlineArray2(2,'style','text-align:center;'),(null as any));
    this._MdPrefixRejector_7_3 = new import9.Wrapper_MdPrefixRejector(this.parentView.injectorGet(import14.MATERIAL_COMPATIBILITY_MODE,this.parentIndex,(null as any)));
    this._MdDialogActions_7_4 = new import11.Wrapper_MdDialogActions();
    this._text_8 = this.renderer.createText(this._el_7,'\n			',(null as any));
    this._anchor_9 = this.renderer.createTemplateAnchor(this._el_7,(null as any));
    this._vc_9 = new import12.ViewContainer(9,7,this,this._anchor_9);
    this._TemplateRef_9_5 = new import19.TemplateRef_(this,9,this._anchor_9);
    this._NgIf_9_6 = new import18.Wrapper_NgIf(this._vc_9.vcRef,this._TemplateRef_9_5);
    this._text_10 = this.renderer.createText(this._el_7,'\n		',(null as any));
    this._text_11 = this.renderer.createText(parentRenderNode,'	\n		',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._anchor_9,
      this._text_10,
      this._text_11
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.MdPrefixRejector) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._MdPrefixRejector_1_3.context; }
    if (((token === import17.MdDialogTitle) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._MdDialogTitle_1_4.context; }
    if (((token === import14.MdPrefixRejector) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdPrefixRejector_4_3.context; }
    if (((token === import17.MdDialogContent) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdDialogContent_4_4.context; }
    if (((token === import19.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import20.NgIf) && (9 === requestNodeIndex))) { return this._NgIf_9_6.context; }
    if (((token === import14.MdPrefixRejector) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._MdPrefixRejector_7_3.context; }
    if (((token === import17.MdDialogActions) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._MdDialogActions_7_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._MdPrefixRejector_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    this._MdDialogTitle_1_4.ngDoCheck(this,this._el_1,throwOnChange);
    this._MdPrefixRejector_4_3.ngDoCheck(this,this._el_4,throwOnChange);
    this._MdDialogContent_4_4.ngDoCheck(this,this._el_4,throwOnChange);
    this._MdPrefixRejector_7_3.ngDoCheck(this,this._el_7,throwOnChange);
    this._MdDialogActions_7_4.ngDoCheck(this,this._el_7,throwOnChange);
    const currVal_9_0_0:any = this.context.close;
    this._NgIf_9_6.check_ngIf(currVal_9_0_0,throwOnChange,false);
    this._NgIf_9_6.ngDoCheck(this,this._anchor_9,throwOnChange);
    this._vc_9.detectChangesInNestedViews(throwOnChange);
    this._MdDialogTitle_1_4.checkHost(this,this,this._el_1,throwOnChange);
    const currVal_21:any = import3.inlineInterpolate(1,'',this.context.title,'');
    if (import3.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setText(this._text_2,currVal_21);
      this._expr_21 = currVal_21;
    }
    this._MdDialogContent_4_4.checkHost(this,this,this._el_4,throwOnChange);
    const currVal_22:any = import3.inlineInterpolate(1,'',this.context.text,'');
    if (import3.checkBinding(throwOnChange,this._expr_22,currVal_22)) {
      this.renderer.setText(this._text_5,currVal_22);
      this._expr_22 = currVal_22;
    }
    this._MdDialogActions_7_4.checkHost(this,this,this._el_7,throwOnChange);
  }
  destroyInternal():void {
    this._vc_9.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 9)) { return new View_DialogDisplay1(this.viewUtils,this,9,this._anchor_9,this._vc_9); }
    return (null as any);
  }
}