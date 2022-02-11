'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">student documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddressModule.html" data-type="entity-link" >AddressModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AddressModule-623a9635815b2b98e6e813dc4d2267593f492633b66106341bf3839a5cedd193feb3f22e08a6dae0001d8b0c5f7a7bfbb5616270d90ec9d07c7ea4ec822faca7"' : 'data-target="#xs-controllers-links-module-AddressModule-623a9635815b2b98e6e813dc4d2267593f492633b66106341bf3839a5cedd193feb3f22e08a6dae0001d8b0c5f7a7bfbb5616270d90ec9d07c7ea4ec822faca7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AddressModule-623a9635815b2b98e6e813dc4d2267593f492633b66106341bf3839a5cedd193feb3f22e08a6dae0001d8b0c5f7a7bfbb5616270d90ec9d07c7ea4ec822faca7"' :
                                            'id="xs-controllers-links-module-AddressModule-623a9635815b2b98e6e813dc4d2267593f492633b66106341bf3839a5cedd193feb3f22e08a6dae0001d8b0c5f7a7bfbb5616270d90ec9d07c7ea4ec822faca7"' }>
                                            <li class="link">
                                                <a href="controllers/AddressController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AddressModule-623a9635815b2b98e6e813dc4d2267593f492633b66106341bf3839a5cedd193feb3f22e08a6dae0001d8b0c5f7a7bfbb5616270d90ec9d07c7ea4ec822faca7"' : 'data-target="#xs-injectables-links-module-AddressModule-623a9635815b2b98e6e813dc4d2267593f492633b66106341bf3839a5cedd193feb3f22e08a6dae0001d8b0c5f7a7bfbb5616270d90ec9d07c7ea4ec822faca7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AddressModule-623a9635815b2b98e6e813dc4d2267593f492633b66106341bf3839a5cedd193feb3f22e08a6dae0001d8b0c5f7a7bfbb5616270d90ec9d07c7ea4ec822faca7"' :
                                        'id="xs-injectables-links-module-AddressModule-623a9635815b2b98e6e813dc4d2267593f492633b66106341bf3839a5cedd193feb3f22e08a6dae0001d8b0c5f7a7bfbb5616270d90ec9d07c7ea4ec822faca7"' }>
                                        <li class="link">
                                            <a href="injectables/AddressService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-b09a6492ea1f6ae967dcb6c1cc81f041897ff4b8913a36734e2e5d17ad717c97b7536fd17894ca7d27ddaa9720160dce03e543a4320c6d66a3e1f651051fa8aa"' : 'data-target="#xs-controllers-links-module-AppModule-b09a6492ea1f6ae967dcb6c1cc81f041897ff4b8913a36734e2e5d17ad717c97b7536fd17894ca7d27ddaa9720160dce03e543a4320c6d66a3e1f651051fa8aa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-b09a6492ea1f6ae967dcb6c1cc81f041897ff4b8913a36734e2e5d17ad717c97b7536fd17894ca7d27ddaa9720160dce03e543a4320c6d66a3e1f651051fa8aa"' :
                                            'id="xs-controllers-links-module-AppModule-b09a6492ea1f6ae967dcb6c1cc81f041897ff4b8913a36734e2e5d17ad717c97b7536fd17894ca7d27ddaa9720160dce03e543a4320c6d66a3e1f651051fa8aa"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-b09a6492ea1f6ae967dcb6c1cc81f041897ff4b8913a36734e2e5d17ad717c97b7536fd17894ca7d27ddaa9720160dce03e543a4320c6d66a3e1f651051fa8aa"' : 'data-target="#xs-injectables-links-module-AppModule-b09a6492ea1f6ae967dcb6c1cc81f041897ff4b8913a36734e2e5d17ad717c97b7536fd17894ca7d27ddaa9720160dce03e543a4320c6d66a3e1f651051fa8aa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-b09a6492ea1f6ae967dcb6c1cc81f041897ff4b8913a36734e2e5d17ad717c97b7536fd17894ca7d27ddaa9720160dce03e543a4320c6d66a3e1f651051fa8aa"' :
                                        'id="xs-injectables-links-module-AppModule-b09a6492ea1f6ae967dcb6c1cc81f041897ff4b8913a36734e2e5d17ad717c97b7536fd17894ca7d27ddaa9720160dce03e543a4320c6d66a3e1f651051fa8aa"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CourseModule.html" data-type="entity-link" >CourseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CourseModule-8c36d3674dd978f362f80c4db2ef8cac2524b1c8219e1fd25c98ed7cae1ae25b59820d1a9d4715736ea55970ab6aedb01cb95cc69db450248cd88e65fc99df97"' : 'data-target="#xs-controllers-links-module-CourseModule-8c36d3674dd978f362f80c4db2ef8cac2524b1c8219e1fd25c98ed7cae1ae25b59820d1a9d4715736ea55970ab6aedb01cb95cc69db450248cd88e65fc99df97"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CourseModule-8c36d3674dd978f362f80c4db2ef8cac2524b1c8219e1fd25c98ed7cae1ae25b59820d1a9d4715736ea55970ab6aedb01cb95cc69db450248cd88e65fc99df97"' :
                                            'id="xs-controllers-links-module-CourseModule-8c36d3674dd978f362f80c4db2ef8cac2524b1c8219e1fd25c98ed7cae1ae25b59820d1a9d4715736ea55970ab6aedb01cb95cc69db450248cd88e65fc99df97"' }>
                                            <li class="link">
                                                <a href="controllers/CourseController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CourseModule-8c36d3674dd978f362f80c4db2ef8cac2524b1c8219e1fd25c98ed7cae1ae25b59820d1a9d4715736ea55970ab6aedb01cb95cc69db450248cd88e65fc99df97"' : 'data-target="#xs-injectables-links-module-CourseModule-8c36d3674dd978f362f80c4db2ef8cac2524b1c8219e1fd25c98ed7cae1ae25b59820d1a9d4715736ea55970ab6aedb01cb95cc69db450248cd88e65fc99df97"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CourseModule-8c36d3674dd978f362f80c4db2ef8cac2524b1c8219e1fd25c98ed7cae1ae25b59820d1a9d4715736ea55970ab6aedb01cb95cc69db450248cd88e65fc99df97"' :
                                        'id="xs-injectables-links-module-CourseModule-8c36d3674dd978f362f80c4db2ef8cac2524b1c8219e1fd25c98ed7cae1ae25b59820d1a9d4715736ea55970ab6aedb01cb95cc69db450248cd88e65fc99df97"' }>
                                        <li class="link">
                                            <a href="injectables/CourseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-fb341c44fc8096bbce789e01752408ae82da0b88f31cc594fd81fe61b6d4e15a908ce174ff381004ed8002d44c9cfb6bfbfbdb4f7473092f5c236036eb2cbcb4"' : 'data-target="#xs-controllers-links-module-UserModule-fb341c44fc8096bbce789e01752408ae82da0b88f31cc594fd81fe61b6d4e15a908ce174ff381004ed8002d44c9cfb6bfbfbdb4f7473092f5c236036eb2cbcb4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-fb341c44fc8096bbce789e01752408ae82da0b88f31cc594fd81fe61b6d4e15a908ce174ff381004ed8002d44c9cfb6bfbfbdb4f7473092f5c236036eb2cbcb4"' :
                                            'id="xs-controllers-links-module-UserModule-fb341c44fc8096bbce789e01752408ae82da0b88f31cc594fd81fe61b6d4e15a908ce174ff381004ed8002d44c9cfb6bfbfbdb4f7473092f5c236036eb2cbcb4"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-fb341c44fc8096bbce789e01752408ae82da0b88f31cc594fd81fe61b6d4e15a908ce174ff381004ed8002d44c9cfb6bfbfbdb4f7473092f5c236036eb2cbcb4"' : 'data-target="#xs-injectables-links-module-UserModule-fb341c44fc8096bbce789e01752408ae82da0b88f31cc594fd81fe61b6d4e15a908ce174ff381004ed8002d44c9cfb6bfbfbdb4f7473092f5c236036eb2cbcb4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-fb341c44fc8096bbce789e01752408ae82da0b88f31cc594fd81fe61b6d4e15a908ce174ff381004ed8002d44c9cfb6bfbfbdb4f7473092f5c236036eb2cbcb4"' :
                                        'id="xs-injectables-links-module-UserModule-fb341c44fc8096bbce789e01752408ae82da0b88f31cc594fd81fe61b6d4e15a908ce174ff381004ed8002d44c9cfb6bfbfbdb4f7473092f5c236036eb2cbcb4"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AddressController.html" data-type="entity-link" >AddressController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CourseController.html" data-type="entity-link" >CourseController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Address.html" data-type="entity-link" >Address</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Course.html" data-type="entity-link" >Course</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddressDto.html" data-type="entity-link" >AddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddressRepository.html" data-type="entity-link" >AddressRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/CourseDto.html" data-type="entity-link" >CourseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CourseRepository.html" data-type="entity-link" >CourseRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomException.html" data-type="entity-link" >CustomException</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExceptionExceptionFilter.html" data-type="entity-link" >ExceptionExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRepository.html" data-type="entity-link" >UserRepository</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AddressService.html" data-type="entity-link" >AddressService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CourseService.html" data-type="entity-link" >CourseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ValidationPipeOptions.html" data-type="entity-link" >ValidationPipeOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});