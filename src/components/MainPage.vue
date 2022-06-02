<template>
  <div class="warp_body">
    <div class="cont">
      <div class="block_1">
        <div class="row align-content-center">
          <div class="col-md-6 d-flex flex-column justify-content-center">
              <div class="pl-60">
              <div class="title_h1">Рассчитайте стоимость услуг в удобном калькуляторе</div>
              <button class="bt_index" @click="showModal">Рассчитать стоимость</button>
              </div>
          </div>
          <div class="col-md-6 warp_img">
              <img class="img-round" src="https://script.kdm1.ru/epiliumclinic/dist/img/i.webp" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="warp_model" :class="{active: isActive}">
      <div class="modal_body" :class="classObject">
        <div class="close_model" @click="showModal">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" y1="-1" x2="23.0674" y2="-1" transform="matrix(-0.717764 0.696286 -0.717764 -0.696286 24.2747 7.24219)" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <line x1="1" y1="-1" x2="23.0674" y2="-1" transform="matrix(0.717764 0.696286 0.717764 -0.696286 7.92017 7)" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="container-fluid">
          <div class="row" v-if="currentStep == 1">
            <div class="col-12 col-md-4">
              <div class="title mb-3">Укажите ваш пол</div>

              <input type="radio" id="man" value="man" v-model="floor" />
              <label for="man" class="bt label-bt">
                Мужчина
                <span>
                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 0.46967C12.8232 0.762563 12.8232 1.23744 12.5303 1.53033L5.53033 8.53033C5.23744 8.82322 4.76256 8.82322 4.46967 8.53033L0.46967 4.53033C0.176777 4.23744 0.176777 3.76256 0.46967 3.46967C0.762563 3.17678 1.23744 3.17678 1.53033 3.46967L5 6.93934L11.4697 0.46967C11.7626 0.176777 12.2374 0.176777 12.5303 0.46967Z" fill="#F5CFD6"/>
                </svg>
                </span>
              </label>
              <input type="radio" id="female" value="female" v-model="floor" />
              <label for="female" class="bt label-bt">
                Женщина
                <span>
                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 0.46967C12.8232 0.762563 12.8232 1.23744 12.5303 1.53033L5.53033 8.53033C5.23744 8.82322 4.76256 8.82322 4.46967 8.53033L0.46967 4.53033C0.176777 4.23744 0.176777 3.76256 0.46967 3.46967C0.762563 3.17678 1.23744 3.17678 1.53033 3.46967L5 6.93934L11.4697 0.46967C11.7626 0.176777 12.2374 0.176777 12.5303 0.46967Z" fill="#F5CFD6"/>
                </svg>
                </span>
              </label>



              <div class="title mt-5 mb-3">Выберите лазер</div>
              <input type="radio" id="diode_laser" value="diode_laser" v-model="laser" />
              <label for="diode_laser" class="bt label-bt">
                Диодный лазер
                <span>
                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 0.46967C12.8232 0.762563 12.8232 1.23744 12.5303 1.53033L5.53033 8.53033C5.23744 8.82322 4.76256 8.82322 4.46967 8.53033L0.46967 4.53033C0.176777 4.23744 0.176777 3.76256 0.46967 3.46967C0.762563 3.17678 1.23744 3.17678 1.53033 3.46967L5 6.93934L11.4697 0.46967C11.7626 0.176777 12.2374 0.176777 12.5303 0.46967Z" fill="#F5CFD6"/>
                </svg>
                </span>
              </label>
              <input type="radio" id="alexandrite_laser" value="alexandrite_laser" v-model="laser" />
              <label for="alexandrite_laser" class="bt label-bt">
                Александритовый лазер
                <span>
                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 0.46967C12.8232 0.762563 12.8232 1.23744 12.5303 1.53033L5.53033 8.53033C5.23744 8.82322 4.76256 8.82322 4.46967 8.53033L0.46967 4.53033C0.176777 4.23744 0.176777 3.76256 0.46967 3.46967C0.762563 3.17678 1.23744 3.17678 1.53033 3.46967L5 6.93934L11.4697 0.46967C11.7626 0.176777 12.2374 0.176777 12.5303 0.46967Z" fill="#F5CFD6"/>
                </svg>
                </span>
              </label>




              <div class="title mt-5 mb-3">Были у нас?</div>
              <input type="checkbox" id="first_visit"  v-model="first_visit" />
              <label for="first_visit" class="bt label-bt">
                Первое посещение
                <span>
                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 0.46967C12.8232 0.762563 12.8232 1.23744 12.5303 1.53033L5.53033 8.53033C5.23744 8.82322 4.76256 8.82322 4.46967 8.53033L0.46967 4.53033C0.176777 4.23744 0.176777 3.76256 0.46967 3.46967C0.762563 3.17678 1.23744 3.17678 1.53033 3.46967L5 6.93934L11.4697 0.46967C11.7626 0.176777 12.2374 0.176777 12.5303 0.46967Z" fill="#F5CFD6"/>
                </svg>
                </span>
              </label>
            </div>
            <div class="col-12 col-md-4">
              <div class="warp_choose_zone"  :class="{active: isShowChooseZone}">
                <div class="title mb-3">Выберите зону</div>
                <div class="row ">
                  <div class="col-12 " :class="[this.floor === 'man' ? 'col-md-12' : 'col-md-6']">
                      <input type="radio" id="face_and_neck" value="face_and_neck" v-model="choose_zone" />
                    <label for="face_and_neck" class="bt label-bt">
                      Лицо и шея
                      <span>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 0.46967C12.8232 0.762563 12.8232 1.23744 12.5303 1.53033L5.53033 8.53033C5.23744 8.82322 4.76256 8.82322 4.46967 8.53033L0.46967 4.53033C0.176777 4.23744 0.176777 3.76256 0.46967 3.46967C0.762563 3.17678 1.23744 3.17678 1.53033 3.46967L5 6.93934L11.4697 0.46967C11.7626 0.176777 12.2374 0.176777 12.5303 0.46967Z" fill="#F5CFD6"/>
                        </svg>
                      </span>
                    </label>
                  </div>


                  <div class="col-12 col-md-6">
                    <input type="radio" id="arms" value="arms" v-model="choose_zone" />
                    <label for="arms" class="bt label-bt">
                      Руки
                      <span>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 0.46967C12.8232 0.762563 12.8232 1.23744 12.5303 1.53033L5.53033 8.53033C5.23744 8.82322 4.76256 8.82322 4.46967 8.53033L0.46967 4.53033C0.176777 4.23744 0.176777 3.76256 0.46967 3.46967C0.762563 3.17678 1.23744 3.17678 1.53033 3.46967L5 6.93934L11.4697 0.46967C11.7626 0.176777 12.2374 0.176777 12.5303 0.46967Z" fill="#F5CFD6"/>
                        </svg>
                      </span>
                    </label>
                  </div>

                  <div class="col-12 col-md-6">
                    <input type="radio" id="legs" value="legs" v-model="choose_zone" />
                    <label for="legs" class="bt label-bt">
                      Ноги
                      <span>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 0.46967C12.8232 0.762563 12.8232 1.23744 12.5303 1.53033L5.53033 8.53033C5.23744 8.82322 4.76256 8.82322 4.46967 8.53033L0.46967 4.53033C0.176777 4.23744 0.176777 3.76256 0.46967 3.46967C0.762563 3.17678 1.23744 3.17678 1.53033 3.46967L5 6.93934L11.4697 0.46967C11.7626 0.176777 12.2374 0.176777 12.5303 0.46967Z" fill="#F5CFD6"/>
                        </svg>
                      </span>
                    </label>
                  </div>

                  <div class="col-12 col-md-6" v-if="this.floor != 'man'">
                    <input type="radio" id="biniki" value="biniki" v-model="choose_zone" />
                    <label for="biniki" class="bt label-bt">
                      Биники
                      <span>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 0.46967C12.8232 0.762563 12.8232 1.23744 12.5303 1.53033L5.53033 8.53033C5.23744 8.82322 4.76256 8.82322 4.46967 8.53033L0.46967 4.53033C0.176777 4.23744 0.176777 3.76256 0.46967 3.46967C0.762563 3.17678 1.23744 3.17678 1.53033 3.46967L5 6.93934L11.4697 0.46967C11.7626 0.176777 12.2374 0.176777 12.5303 0.46967Z" fill="#F5CFD6"/>
                        </svg>
                      </span>
                    </label>
                  </div>

                  <div class="col-12" >
                    <input type="radio" id="back_and_belly" value="back_and_belly" v-model="choose_zone" />
                    <label for="back_and_belly" class="bt label-bt">
                      Спина и живот
                      <span>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 0.46967C12.8232 0.762563 12.8232 1.23744 12.5303 1.53033L5.53033 8.53033C5.23744 8.82322 4.76256 8.82322 4.46967 8.53033L0.46967 4.53033C0.176777 4.23744 0.176777 3.76256 0.46967 3.46967C0.762563 3.17678 1.23744 3.17678 1.53033 3.46967L5 6.93934L11.4697 0.46967C11.7626 0.176777 12.2374 0.176777 12.5303 0.46967Z" fill="#F5CFD6"/>
                        </svg>
                      </span>
                    </label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12" >
                    <div class="title mt-5 mb-3">Выберите услуги <span>Можно несколько</span></div>
                    <div class="col" v-for="service in services" :key="service.code">
                      <input type="checkbox" :id="service.code" :value="service.code" v-model="val_service" />
                      <label :for="service.code" class="bt label-bt">
                        {{service.name}}
                        <span>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 0.46967C12.8232 0.762563 12.8232 1.23744 12.5303 1.53033L5.53033 8.53033C5.23744 8.82322 4.76256 8.82322 4.46967 8.53033L0.46967 4.53033C0.176777 4.23744 0.176777 3.76256 0.46967 3.46967C0.762563 3.17678 1.23744 3.17678 1.53033 3.46967L5 6.93934L11.4697 0.46967C11.7626 0.176777 12.2374 0.176777 12.5303 0.46967Z" fill="#F5CFD6"/>
                        </svg>
                      </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="warp_selected_services" :class="{active: isSelectedServices}">
                <div class="d-flex flex-column justify-content-between h-100">
                  <div class="warp-select_services">
                    <div class="title mb-3">Выбранные услуги</div>

                    <div class="col mb-4" v-for="(service,index ) in storeService" :key="index">
                      <div class="d-flex justify-content-between" :id="service.code">
                        <span class="name">{{service.name}}</span>
                        <span class="price">{{service.price}}
                          <button @click="removeService(index)">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75011 1C6.75011 0.585787 6.41433 0.25 6.00011 0.25C5.5859 0.25 5.25011 0.585786 5.25011 1L5.25011 5.24999L1.00012 5.24999C0.585907 5.24999 0.25012 5.58578 0.25012 5.99999C0.25012 6.41421 0.585907 6.74999 1.00012 6.74999L5.25011 6.74999L5.25011 11C5.25011 11.4142 5.5859 11.75 6.00011 11.75C6.41433 11.75 6.75011 11.4142 6.75011 11L6.75011 6.74999L11.0001 6.74999C11.4143 6.74999 11.7501 6.41421 11.7501 5.99999C11.7501 5.58578 11.4143 5.24999 11.0001 5.24999H6.75011L6.75011 1Z" fill="black"/></svg>
                          </button>
                        </span>
                      </div>
                    </div>
                    <div class="col mb-4" v-for="service in SelectedServices" :key="service.code">
                      <div class="d-flex justify-content-between" :id="service.code">
                        <span class="name">{{service.name}}</span>
                        <span class="price">{{service.price}}
                          <button @click="removeServiceTmp(service.code)">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75011 1C6.75011 0.585787 6.41433 0.25 6.00011 0.25C5.5859 0.25 5.25011 0.585786 5.25011 1L5.25011 5.24999L1.00012 5.24999C0.585907 5.24999 0.25012 5.58578 0.25012 5.99999C0.25012 6.41421 0.585907 6.74999 1.00012 6.74999L5.25011 6.74999L5.25011 11C5.25011 11.4142 5.5859 11.75 6.00011 11.75C6.41433 11.75 6.75011 11.4142 6.75011 11L6.75011 6.74999L11.0001 6.74999C11.4143 6.74999 11.7501 6.41421 11.7501 5.99999C11.7501 5.58578 11.4143 5.24999 11.0001 5.24999H6.75011L6.75011 1Z" fill="black"/></svg>
                          </button>
                        </span>
                      </div>
                    </div>
                    <div class="col warp_add_service">
                      <button @click="addServices">Добавить услугу <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.68957 1.5C6.68957 1.08579 6.35378 0.75 5.93957 0.75C5.52535 0.75 5.18957 1.08579 5.18957 1.5L5.18957 5.74999L0.939573 5.74999C0.52536 5.74999 0.189573 6.08578 0.189573 6.49999C0.189573 6.91421 0.52536 7.24999 0.939573 7.24999L5.18957 7.24999L5.18957 11.5C5.18957 11.9142 5.52535 12.25 5.93957 12.25C6.35378 12.25 6.68957 11.9142 6.68957 11.5L6.68957 7.24999L10.9396 7.24999C11.3538 7.24999 11.6896 6.91421 11.6896 6.49999C11.6896 6.08578 11.3538 5.74999 10.9396 5.74999H6.68957L6.68957 1.5Z" fill="#2E1B3E"/>
                      </svg>
                      </button>
                    </div>
                  </div>
                  <div class="warp_itog">
                    <div class="title">Итого:</div>
                    <div class="price"><div>{{allPrice.price}}<span class="rubl">₽</span></div> <div class="discount" v-if="allPrice.discountPrice">{{allPrice.discountPrice}}<span class="rubl">₽</span></div></div>
                    <div class="warp_sign_up_online">
                      <button class="bt_sing" @click="goToStep(2);">Записаться онлайн</button>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
          <div class="row" v-if="currentStep == 2">
            <div class="col-12 col-md-8 mb-5 mb-md-0">
              <div class="title">Укажите ваши контактные данные</div>
              <div class="sub_title">
                Менеджер перезвонит вам для подтверждения заказа
              </div>
              <Form @submit="onSubmit" class="warp_form">
                <div class="row flex-column align-items-center warp_statps_1">
                  <div class="col position-relative">
                    <Field name="name" type="text" placeholder="Ваше имя" class="input-control"  :rules="validateText" />
                    <ErrorMessage class="input-error" name="name" />
                  </div>

                  <div class="col position-relative">

                    <Field name="phone" type="text" placeholder="Телефон" id="phone-mask" class="input-control"  :rules="validatePhone" />
                    <ErrorMessage class="input-error" name="phone" />
                  </div>
                  <div class="col">
                    <button type="submit" class="bt_sing">Записаться онлайн</button>
                  </div>
                </div>
              </Form>
            </div>
            <div class="col-12 col-md-4 warp_result">
              <div class="title mb-4">Выбранные услуги</div>
              <div class="col mb-2" v-for="service in storeService" :key="service.code">
                <div class="d-flex justify-content-between" :id="service.code">
                  <span class="name">{{service.name}}</span>
                  <span class="price">{{service.price}}</span>
                </div>
              </div>
              <div class="warp_itog">
                <div class="title mb-1">Итого:</div>
                <div class="price"><div>{{allPrice.price}}<span class="rubl">₽</span></div> <div class="discount" v-if="allPrice.discountPrice">{{allPrice.discountPrice}}<span class="rubl">₽</span></div></div>
              </div>
            </div>
          </div>
          <div class="row" v-if="currentStep == 3">
            <div class="col-12">
                <div class="result">Спасибо за доверие!</div>
                <div class="sub_result">Менеджер перезвонит вам в ближайшее время</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import axios from "axios";
import Inputmask from 'inputmask';

export default {
  name: 'MainPage',
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  props: {
    msg: String
  },
  mounted () {
    // ... используем
      let im = new Inputmask("99-9999999");
      im.mask(document.getElementById('phone-mask'));
  },
  data(){

    let Allservices=
        {
          "female":
              {
                "diode_laser":{
                  "face_and_neck":{
                    "full_face":
                        {
                          "name": "Лицо полностью",
                          "code": "full_face",
                          "price":1500,
                        },
                    "upper_lip":
                        {
                          "name": "Верхняя губа",
                          "code": "upper_lip",
                          "price":450,
                        },
                    "chin":
                        {
                          "name": "Подбородок",
                          "code": "chin",
                          "price":450,
                        },
                    "whiskers":
                        {
                          "name": "Бакенбарды",
                          "code": "whiskers",
                          "price":450,
                        },
                    "cheekbones":
                        {
                          "name": "Скулы",
                          "code": "cheekbones",
                          "price":450,
                        },
                    "forehead":
                        {
                          "name": "Лоб",
                          "code": "forehead",
                          "price":500,
                        },
                    "nose":
                        {
                          "name": "Нос",
                          "code": "nose",
                          "price":450,
                        },
                    "anterior_posterior_neck":
                        {
                          "name": "Передняя/задняя поверхность шеи",
                          "code": "anterior_posterior_neck",
                          "price":600,
                        },
                    "neck_completely":
                        {
                          "name": "Шея полностью",
                          "code": "neck_completely",
                          "price":1200,
                        }
                  },
                  "arms":{
                    "hands_completely":
                        {
                          "name": "Руки полностью",
                          "code": "hands_completely",
                          "price":1300,
                        },
                    "armpits":
                        {
                          "name": "Подмышечные впадины",
                          "code": "armpits",
                          "price":1000,
                        },
                    "shoulders":
                        {
                          "name": "Плечи",
                          "code": "shoulders",
                          "price":1000,
                        },
                    "forearm":
                        {
                          "name": "Предплечье",
                          "code": "forearm",
                          "price":800,
                        }
                  },
                  "legs":{
                    "full_legs":
                        {
                          "name": "Ноги полностью",
                          "code": "full_legs",
                          "price":2000,
                        },
                    "hips":
                        {
                          "name": "Бедра",
                          "code": "hips",
                          "price":1000,
                        },
                    "knees":
                        {
                          "name": "Колени",
                          "code": "knees",
                          "price":500,
                        },
                    "shins":
                        {
                          "name": "Голени",
                          "code": "shins",
                          "price":1000,
                        },
                    "foot_toes":
                        {
                          "name": "Стопа + пальцы",
                          "code": "foot_toes",
                          "price":500,
                        }
                  },
                  "biniki":{
                    "total_bikini":
                        {
                          "name": "Тотальное бикини",
                          "code": "total_bikini",
                          "price":1500,
                        },
                    "classic_bikini":
                        {
                          "name": "Классическое бикини",
                          "code": "classic_bikini",
                          "price":1000,
                        },
                    "pubic_part":
                        {
                          "name": "Лобковая часть",
                          "code": "pubic_part",
                          "price":1000,
                        },
                    "intergluteal_zone":
                        {
                          "name": "Межъягодичная зона",
                          "code": "intergluteal_zone",
                          "price":450,
                        },
                    "buttocks":
                        {
                          "name": "Ягодицы",
                          "code": "buttocks",
                          "price":800,
                        }
                  },
                  "back_and_belly":{
                    "full_belly":
                        {
                          "name": "Живот полностью",
                          "code": "full_belly",
                          "price":1000,
                        },
                    "white_line_abdomen":
                        {
                          "name": "Белая линия живота",
                          "code": "white_line_abdomen",
                          "price":450,
                        },
                    "full_back":
                        {
                          "name": "Спина полностью",
                          "code": "full_back",
                          "price":1500,
                        },
                    "upper_back":
                        {
                          "name": "Верх спины",
                          "code": "upper_back",
                          "price":1000,
                        },
                    "small_back":
                        {
                          "name": "Поясница",
                          "code": "small_back",
                          "price":800,
                        },
                    "full_chest":
                        {
                          "name": "Грудь полностью",
                          "code": "full_chest",
                          "price":1300,
                        },
                    "areolas_nipples":
                        {
                          "name": "Ареолы сосков",
                          "code": "areolas_nipples",
                          "price":450,
                        },
                  },
                },
                "alexandrite_laser":{
                  "face_and_neck":{
                    "full_face":
                        {
                          "name": "Лицо полностью",
                          "code": "full_face",
                          "price":2700,
                        },
                    "wpper_lip":
                        {
                          "name": "Верхняя губа",
                          "code": "wpper_lip",
                          "price":700,
                        },
                    "between_eyebrows":
                        {
                          "name": "Межбровье",
                          "code": "between_eyebrows",
                          "price":300,
                        },
                    "ears":
                        {
                          "name": "ears",
                          "code": "Уши",
                          "price":600,
                        },
                    "chin":
                        {
                          "name": "Подбородок",
                          "code": "chin",
                          "price":700,
                        },
                    "whiskers":
                        {
                          "name": "Бакенбарды",
                          "code": "whiskers",
                          "price":700,
                        },
                    "cheekbones":
                        {
                          "name": "Скулы",
                          "code": "",
                          "price":700,
                        },
                    "forehead":
                        {
                          "name": "Лоб",
                          "code": "forehead",
                          "price":700,
                        },
                    "nose":
                        {
                          "name": "Нос",
                          "code": "nose",
                          "price":600,
                        },
                    "anterior_surface_neck":
                        {
                          "name": "Передняя поверхность шеи",
                          "code": "anterior_surface_neck",
                          "price":700,
                        },
                    "back_neck":
                        {
                          "name": "Задняя поверхность шеи",
                          "code": "back_neck",
                          "price":700,
                        },
                  },
                  "arms":{
                    "hands_completely":
                        {
                          "name": "Руки полностью",
                          "code": "hands_completely",
                          "price":2700,
                        },
                    "armpits":
                        {
                          "name": "Подмышечные впадины",
                          "code": "armpits",
                          "price":1400,
                        },
                    "forearm":
                        {
                          "name": "Предплечье",
                          "code": "forearm",
                          "price":1800,
                        },
                    "hands_fingers":
                        {
                          "name": "Кисти рук+пальцы",
                          "code": "hands_fingers",
                          "price":700,
                        },
                  },
                  "legs":{
                    "full_legs":
                        {
                          "name": "Ноги полностью",
                          "code": "full_legs",
                          "price":6700,
                        },
                    "hips":
                        {
                          "name": "Бедра",
                          "code": "hips",
                          "price":3900,
                        },
                    "knees":
                        {
                          "name": "Колени",
                          "code": "knees",
                          "price":1200,
                        },
                    "shins":
                        {
                          "name": "Голени",
                          "code": "shins",
                          "price":3200,
                        },
                    "foot_toes":
                        {
                          "name": "Стопа + пальцы",
                          "code": "foot_toes",
                          "price":700,
                        }
                  },
                  "biniki":{
                    "total_bikini":
                        {
                          "name": "Тотальное бикини",
                          "code": "total_bikini",
                          "price":2400,
                        },
                    "classic_bikini":
                        {
                          "name": "Классическое бикини",
                          "code": "classic_bikini",
                          "price":1500,
                        },
                    "pubic_part":
                        {
                          "name": "Лобковая часть",
                          "code": "pubic_part",
                          "price":1000,
                        },
                    "intergluteal_zone":
                        {
                          "name": "Межъягодичная зона",
                          "code": "intergluteal_zone",
                          "price":1200,
                        },
                    "buttocks":
                        {
                          "name": "Ягодицы",
                          "code": "buttocks",
                          "price":1900,
                        }
                    ,
                    "one_Flash":
                        {
                          "name": "Одна вспышка",
                          "code": "one_Flash",
                          "price":50,
                        }
                  },
                  "back_and_belly":{
                    "full_belly":
                        {
                          "name": "Живот полностью",
                          "code": "full_belly",
                          "price":1700,
                        },
                    "white_line_abdomen":
                        {
                          "name": "Белая линия живота",
                          "code": "white_line_abdomen",
                          "price":700,
                        },
                    "full_back":
                        {
                          "name": "Спина полностью",
                          "code": "full_back",
                          "price":3300,
                        },
                    "small_back":
                        {
                          "name": "Поясница",
                          "code": "small_back",
                          "price":1300,
                        },
                    "full_chest":
                        {
                          "name": "Грудь полностью",
                          "code": "full_chest",
                          "price":1800,
                        },
                    "areolas_nipples":
                        {
                          "name": "Ареолы сосков",
                          "code": "areolas_nipples",
                          "price":700,
                        },
                    "neckline":
                        {
                          "name": "Декольте",
                          "code": "neckline",
                          "price":900,
                        },
                  },
                }
              },
          "man":{
            "diode_laser":{
              "face_and_neck":{
                "full_face":
                    {
                      "name": "Лицо полностью",
                      "code": "full_face",
                      "price":1950,
                    },
                "neck_front":
                    {
                      "name": "Шея спереди",
                      "code": "neck_front",
                      "price":780,
                    },
                "back_neck":
                    {
                      "name": "Шея сзади",
                      "code": "back_neck",
                      "price":780,
                    },
                "beard_correction":
                    {
                      "name": "Коррекция бороды",
                      "code": "beard_correction",
                      "price":1300,
                    },
                "nustache":
                    {
                      "name": "Усы",
                      "code": "nustache",
                      "price":585,
                    },
                "eyebrow":
                    {
                      "name": "Межбровье",
                      "code": "eyebrow",
                      "price":390,
                    },
                "sideburns":
                    {
                      "name": "Бакенбарды",
                      "code": "sideburns",
                      "price":585,
                    },
                "cheeks":
                    {
                      "name": "Щеки",
                      "code": "cheeks",
                      "price":585,
                    },
                "chin":
                    {
                      "name": "Подбородок",
                      "code": "chin",
                      "price":585,
                    },
                "lob":
                    {
                      "name": "Лоб",
                      "code": "lob",
                      "price":585,
                    },
              },
              "arms":{
                "hands_completely":
                    {
                      "name": "Руки полностью",
                      "code": "hands_completely",
                      "price":1690,
                    },
                "armpits":
                    {
                      "name": "Подмышечные впадины",
                      "code": "armpits",
                      "price":1300,
                    },
                "hands_fingers":
                    {
                      "name": "Кисти рук + пальцы  ",
                      "code": "hands_fingers",
                      "price":650,
                    },
                "forearm":
                    {
                      "name": "Предплечье",
                      "code": "forearm",
                      "price":1300,
                    }
              },
              "legs":{
                "full_legs":
                    {
                      "name": "Ноги полностью",
                      "code": "full_legs",
                      "price":2600,
                    },
                "hips":
                    {
                      "name": "Бедра",
                      "code": "hips",
                      "price":1300,
                    },
                "knees":
                    {
                      "name": "Колени",
                      "code": "knees",
                      "price":650,
                    },
                "shins":
                    {
                      "name": "Голени",
                      "code": "shins",
                      "price":1300,
                    },
                "foot_toes":
                    {
                      "name": "Стопа + пальцы",
                      "code": "foot_toes",
                      "price":650,
                    }
              },
              "back_and_belly":{
                "full_belly":
                    {
                      "name": "Живот полностью",
                      "code": "full_belly",
                      "price":1300,
                    },
                "white_line_abdomen":
                    {
                      "name": "Белая линия живота",
                      "code": "white_line_abdomen",
                      "price":585,
                    },
                "full_back":
                    {
                      "name": "Спина полностью",
                      "code": "full_back",
                      "price":1950,
                    },
                "small_back":
                    {
                      "name": "Поясница",
                      "code": "small_back",
                      "price":1040,
                    },
                "full_chest":
                    {
                      "name": "Грудь полностью",
                      "code": "full_chest",
                      "price":1690,
                    },
                "areolas_nipples":
                    {
                      "name": "Ареолы сосков",
                      "code": "areolas_nipples",
                      "price":585,
                    },
              },
            },
            "alexandrite_laser":{
              "face_and_neck":{
                "full_face":
                    {
                      "name": "Лицо полностью",
                      "code": "full_face",
                      "price":3510,
                    },
                "neck_front":
                    {
                      "name": "Шея спереди",
                      "code": "neck_front",
                      "price":910,
                    },
                "back_neck":
                    {
                      "name": "Шея сзади",
                      "code": "back_neck",
                      "price":910,
                    },
                "beard_correction":
                    {
                      "name": "Коррекция бороды",
                      "code": "beard_correction",
                      "price":2500,
                    },
                "nustache":
                    {
                      "name": "Усы",
                      "code": "nustache",
                      "price":780,
                    },
                "eyebrow":
                    {
                      "name": "Межбровье",
                      "code": "eyebrow",
                      "price":390,
                    },
                "sideburns":
                    {
                      "name": "Бакенбарды",
                      "code": "sideburns",
                      "price":910,
                    },
                "cheeks":
                    {
                      "name": "Щеки",
                      "code": "cheeks",
                      "price":910,
                    },
                "chin":
                    {
                      "name": "Подбородок",
                      "code": "chin",
                      "price":910,
                    },
                "lob":
                    {
                      "name": "Лоб",
                      "code": "lob",
                      "price":910,
                    },
                "mustache":
                    {
                      "name": "Усы",
                      "code": "mustache",
                      "price":910,
                    },
                "nostrils":
                    {
                      "name": "Ноздри",
                      "code": "nostrils",
                      "price":780,
                    },
              },
              "arms":{
                "hands_completely":
                    {
                      "name": "Руки полностью",
                      "code": "hands_completely",
                      "price":3510,
                    },
                "armpits":
                    {
                      "name": "Подмышечные впадины",
                      "code": "armpits",
                      "price":1820,
                    },
                "forearm":
                    {
                      "name": "Предплечье",
                      "code": "forearm",
                      "price":2340,
                    },
                "hands_fingers":
                    {
                      "name": "Кисти рук+пальцы",
                      "code": "hands_fingers",
                      "price":910,
                    },
              },
              "legs":{
                "full_legs":
                    {
                      "name": "Ноги полностью",
                      "code": "full_legs",
                      "price":8710,
                    },
                "hips":
                    {
                      "name": "Бедра",
                      "code": "hips",
                      "price":5070,
                    },
                "knees":
                    {
                      "name": "Колени",
                      "code": "knees",
                      "price":1560,
                    },
                "shins":
                    {
                      "name": "Голени",
                      "code": "shins",
                      "price":4160,
                    },
                "foot_toes":
                    {
                      "name": "Стопа + пальцы",
                      "code": "foot_toes",
                      "price":910,
                    }
              },
              "back_and_belly":{
                "full_belly":
                    {
                      "name": "Живот полностью",
                      "code": "full_belly",
                      "price":2210,
                    },
                "white_line_abdomen":
                    {
                      "name": "Белая линия живота",
                      "code": "white_line_abdomen",
                      "price":910,
                    },
                "full_back":
                    {
                      "name": "Спина полностью",
                      "code": "full_back",
                      "price":4290,
                    },

                "small_back":
                    {
                      "name": "Поясница",
                      "code": "small_back",
                      "price":1690,
                    },
                "full_chest":
                    {
                      "name": "Грудь полностью",
                      "code": "full_chest",
                      "price":2340,
                    },
                "areolas_nipples":
                    {
                      "name": "Ареолы сосков",
                      "code": "areolas_nipples",
                      "price":910,
                    },
                "neckline":
                    {
                      "name": "Декольте",
                      "code": "neckline",
                      "price":1170,
                    },
              },
            }
          }
        }


    return{
      currentStep: 3,
      val_service:[],
      SelectedServices:{},
      floor:'',
      laser:'',
      choose_zone:'',
      services:{},
      Allservices,
      price:'',
      //discountPrice:'',
      first_visit:false,
      isActive:false,
      isShowChooseZone:false,
      isSelectedServices:false
    }
  },
  computed:{
    storeService(){


      /*console.log(this.$store.state.services);
      for(let k in this.$store.state.services){
        console.log(this.$store.state.services[k]);
        console.log(k);
      }

      if(this.$store.state.services.length>0){
        return this.$store.state.services.filter((index, element) => {
            console.log(index);
          console.log(123);
            return element;

        });
      } else {
        return this.$store.state.services;
      }*/
      return this.$store.state.services;
    },
    allPrice(){
      let showPrice;
      if(this.first_visit){
        showPrice = this.$store.state.price + this.price;
        let percent = "20"; // Необходимый процент
        let number_percent = showPrice / 100 * percent;
        //this.discountPrice = showPrice;
        showPrice={
          price: showPrice - number_percent,
          discountPrice: showPrice,
        }
      } else {
        showPrice = this.$store.state.price + this.price;
        showPrice={
          price: showPrice,
        }
      }

      return showPrice;
    },
    classObject() {
      return {
        finish: this.currentStep === 3
      }
    }
  },
  watch: {
    floor: function () {
      if(this.floor !=='' && this.laser !==''){
        this.SelectedServices=[];
        this.price=0;
        this.choose_zone='';
        this.isShowChooseZone=true;
      } else {
        this.isShowChooseZone=false;
      }
    },
    laser: function () {
      if(this.floor !=='' && this.laser !==''){
        this.SelectedServices=[];
        this.price=0;
        this.choose_zone='';
        this.isShowChooseZone=true;
      } else {
        this.isShowChooseZone=false;
      }

    },
    first_visit: function () {
      console.log(this.first_visit);
    },
    choose_zone: function (){
      this.val_service =[];
      this.SelectedServices=[];
      this.price=0;
      this.services={};
      //this.isSelectedServices=false;
      //console.log(this.Allservices);
      if(this.choose_zone.length>0){
            this.services=this.Allservices[this.floor][this.laser][this.choose_zone];
      }
      /*if(this.floor === 'female' && this.laser === 'diode_laser'){ //Лазерная эпиляция (диодный лазер, женщины)
        switch (this.choose_zone){
          case "face_and_neck":
            this.services= {
              "full_face":
                  {
                    "name": "Лицо полностью",
                    "code": "full_face",
                    "price":1500,
                  },
              "upper_lip":
                  {
                    "name": "Верхняя губа",
                    "code": "upper_lip",
                    "price":450,
                  },
              "chin":
                  {
                    "name": "Подбородок",
                    "code": "chin",
                    "price":450,
                  },
              "whiskers":
                  {
                    "name": "Бакенбарды",
                    "code": "whiskers",
                    "price":450,
                  },
              "cheekbones":
                  {
                    "name": "Скулы",
                    "code": "cheekbones",
                    "price":450,
                  },
              "forehead":
                  {
                    "name": "Лоб",
                    "code": "forehead",
                    "price":500,
                  },
              "nose":
                  {
                    "name": "Нос",
                    "code": "nose",
                    "price":450,
                  },
              "anterior_posterior_neck":
                  {
                    "name": "Передняя/задняя поверхность шеи",
                    "code": "anterior_posterior_neck",
                    "price":600,
                  },
              "neck_completely":
                  {
                    "name": "Шея полностью",
                    "code": "neck_completely",
                    "price":1200,
                  }
            }
            break;
          case "arms":
            this.services= {
              "hands_completely":
                  {
                    "name": "Руки полностью",
                    "code": "hands_completely",
                    "price":1300,
                  },
              "armpits":
                  {
                    "name": "Подмышечные впадины",
                    "code": "armpits",
                    "price":1000,
                  },
              "shoulders":
                  {
                    "name": "Плечи",
                    "code": "shoulders",
                    "price":1000,
                  },
              "forearm":
                  {
                    "name": "Предплечье",
                    "code": "forearm",
                    "price":800,
                  }

            }
            break;
          case "legs":
            this.services= {
              "full_legs":
                  {
                    "name": "Ноги полностью",
                    "code": "full_legs",
                    "price":2000,
                  },
              "hips":
                  {
                    "name": "Бедра",
                    "code": "hips",
                    "price":1000,
                  },
              "knees":
                  {
                    "name": "Колени",
                    "code": "knees",
                    "price":500,
                  },
              "shins":
                  {
                    "name": "Голени",
                    "code": "shins",
                    "price":1000,
                  },
              "foot_toes":
                  {
                    "name": "Стопа + пальцы",
                    "code": "foot_toes",
                    "price":500,
                  }

            }
            break;
          case "biniki":
            this.services= {
              "total_bikini":
                  {
                    "name": "Тотальное бикини",
                    "code": "total_bikini",
                    "price":1500,
                  },
              "classic_bikini":
                  {
                    "name": "Классическое бикини",
                    "code": "classic_bikini",
                    "price":1000,
                  },
              "pubic_part":
                  {
                    "name": "Лобковая часть",
                    "code": "pubic_part",
                    "price":1000,
                  },
              "intergluteal_zone":
                  {
                    "name": "Межъягодичная зона",
                    "code": "intergluteal_zone",
                    "price":450,
                  },
              "buttocks":
                  {
                    "name": "Ягодицы",
                    "code": "buttocks",
                    "price":800,
                  }

            }
            break;
          case "back_and_belly":
            this.services= {
              "full_belly":
                  {
                    "name": "Живот полностью",
                    "code": "full_belly",
                    "price":1000,
                  },
              "white_line_abdomen":
                  {
                    "name": "Белая линия живота",
                    "code": "white_line_abdomen",
                    "price":450,
                  },
              "full_back":
                  {
                    "name": "Спина полностью",
                    "code": "full_back",
                    "price":1500,
                  },
              "upper_back":
                  {
                    "name": "Верх спины",
                    "code": "upper_back",
                    "price":1000,
                  },
              "small_back":
                  {
                    "name": "Поясница",
                    "code": "small_back",
                    "price":800,
                  },
              "full_chest":
                  {
                    "name": "Грудь полностью",
                    "code": "full_chest",
                    "price":1300,
                  },
              "areolas_nipples":
                  {
                    "name": "Ареолы сосков",
                    "code": "areolas_nipples",
                    "price":450,
                  },


            }
            break;
        }
      } else if(this.floor === 'female' && this.laser === 'alexandrite_laser'){ //Лазерная эпиляция (Candela GentleLase Pro, женщины)
        switch (this.choose_zone){
          case "face_and_neck":
            this.services= {
              "full_face":
                  {
                    "name": "Лицо полностью",
                    "code": "full_face",
                    "price":2700,
                  },
              "wpper_lip":
                  {
                    "name": "Верхняя губа",
                    "code": "wpper_lip",
                    "price":700,
                  },
              "between_eyebrows":
                  {
                    "name": "Межбровье",
                    "code": "between_eyebrows",
                    "price":300,
                  },
              "ears":
                  {
                    "name": "ears",
                    "code": "Уши",
                    "price":600,
                  },
              "chin":
                  {
                    "name": "Подбородок",
                    "code": "chin",
                    "price":700,
                  },
              "whiskers":
                  {
                    "name": "Бакенбарды",
                    "code": "whiskers",
                    "price":700,
                  },
              "cheekbones":
                  {
                    "name": "Скулы",
                    "code": "",
                    "price":700,
                  },
              "forehead":
                  {
                    "name": "Лоб",
                    "code": "forehead",
                    "price":700,
                  },
              "nose":
                  {
                    "name": "Нос",
                    "code": "nose",
                    "price":600,
                  },
              "anterior_surface_neck":
                  {
                    "name": "Передняя поверхность шеи",
                    "code": "anterior_surface_neck",
                    "price":700,
                  },
              "back_neck":
                  {
                    "name": "Задняя поверхность шеи",
                    "code": "back_neck",
                    "price":700,
                  },

            }
            break;
          case "arms":
            this.services= {
              "hands_completely":
                  {
                    "name": "Руки полностью",
                    "code": "hands_completely",
                    "price":2700,
                  },
              "armpits":
                  {
                    "name": "Подмышечные впадины",
                    "code": "armpits",
                    "price":1400,
                  },
               "forearm":
                  {
                    "name": "Предплечье",
                    "code": "forearm",
                    "price":1800,
                  },
              "hands_fingers":
                  {
                    "name": "Кисти рук+пальцы",
                    "code": "hands_fingers",
                    "price":700,
                  },

            }
            break;
          case "legs":
            this.services= {
              "full_legs":
                  {
                    "name": "Ноги полностью",
                    "code": "full_legs",
                    "price":6700,
                  },
              "hips":
                  {
                    "name": "Бедра",
                    "code": "hips",
                    "price":3900,
                  },
              "knees":
                  {
                    "name": "Колени",
                    "code": "knees",
                    "price":1200,
                  },
              "shins":
                  {
                    "name": "Голени",
                    "code": "shins",
                    "price":3200,
                  },
              "foot_toes":
                  {
                    "name": "Стопа + пальцы",
                    "code": "foot_toes",
                    "price":700,
                  }

            }
            break;
          case "biniki":
            this.services= {
              "total_bikini":
                  {
                    "name": "Тотальное бикини",
                    "code": "total_bikini",
                    "price":2400,
                  },
              "classic_bikini":
                  {
                    "name": "Классическое бикини",
                    "code": "classic_bikini",
                    "price":1500,
                  },
              "pubic_part":
                  {
                    "name": "Лобковая часть",
                    "code": "pubic_part",
                    "price":1000,
                  },
              "intergluteal_zone":
                  {
                    "name": "Межъягодичная зона",
                    "code": "intergluteal_zone",
                    "price":1200,
                  },
              "buttocks":
                  {
                    "name": "Ягодицы",
                    "code": "buttocks",
                    "price":1900,
                  }
              ,
              "one_Flash":
                  {
                    "name": "Одна вспышка",
                    "code": "one_Flash",
                    "price":50,
                  }

            }
            break;
          case "back_and_belly":
            this.services= {
              "full_belly":
                  {
                    "name": "Живот полностью",
                    "code": "full_belly",
                    "price":1700,
                  },
              "white_line_abdomen":
                  {
                    "name": "Белая линия живота",
                    "code": "white_line_abdomen",
                    "price":700,
                  },
              "full_back":
                  {
                    "name": "Спина полностью",
                    "code": "full_back",
                    "price":3300,
                  },
              "small_back":
                  {
                    "name": "Поясница",
                    "code": "small_back",
                    "price":1300,
                  },
              "full_chest":
                  {
                    "name": "Грудь полностью",
                    "code": "full_chest",
                    "price":1800,
                  },
              "areolas_nipples":
                  {
                    "name": "Ареолы сосков",
                    "code": "areolas_nipples",
                    "price":700,
                  },
              "neckline":
                  {
                    "name": "Декольте",
                    "code": "neckline",
                    "price":900,
                  },

            }
            break;
        }
      } else if(this.floor === 'man' && this.laser === 'diode_laser') { //Лазерная эпиляция (диодный лазер, мужчины)
        switch (this.choose_zone){
          case "face_and_neck":
            this.services= {
              "full_face":
                  {
                    "name": "Лицо полностью",
                    "code": "full_face",
                    "price":1950,
                  },
              "neck_front":
                  {
                    "name": "Шея спереди",
                    "code": "neck_front",
                    "price":780,
                  },
              "back_neck":
                  {
                    "name": "Шея сзади",
                    "code": "back_neck",
                    "price":780,
                  },
              "beard_correction":
                  {
                    "name": "Коррекция бороды",
                    "code": "beard_correction",
                    "price":1300,
                  },
              "nustache":
                  {
                    "name": "Усы",
                    "code": "nustache",
                    "price":585,
                  },
              "eyebrow":
                  {
                    "name": "Межбровье",
                    "code": "eyebrow",
                    "price":390,
                  },
              "sideburns":
                  {
                    "name": "Бакенбарды",
                    "code": "sideburns",
                    "price":585,
                  },
              "cheeks":
                  {
                    "name": "Щеки",
                    "code": "cheeks",
                    "price":585,
                  },
              "chin":
                  {
                    "name": "Подбородок",
                    "code": "chin",
                    "price":585,
                  },
              "lob":
                  {
                    "name": "Лоб",
                    "code": "lob",
                    "price":585,
                  },

            }
            break;
          case "arms":
            this.services= {
              "hands_completely":
                  {
                    "name": "Руки полностью",
                    "code": "hands_completely",
                    "price":1690,
                  },
              "armpits":
                  {
                    "name": "Подмышечные впадины",
                    "code": "armpits",
                    "price":1300,
                  },
              "hands_fingers":
                  {
                    "name": "Кисти рук + пальцы  ",
                    "code": "hands_fingers",
                    "price":650,
                  },
              "forearm":
                  {
                    "name": "Предплечье",
                    "code": "forearm",
                    "price":1300,
                  }

            }
            break;
          case "legs":
            this.services= {
              "full_legs":
                  {
                    "name": "Ноги полностью",
                    "code": "full_legs",
                    "price":2600,
                  },
              "hips":
                  {
                    "name": "Бедра",
                    "code": "hips",
                    "price":1300,
                  },
              "knees":
                  {
                    "name": "Колени",
                    "code": "knees",
                    "price":650,
                  },
              "shins":
                  {
                    "name": "Голени",
                    "code": "shins",
                    "price":1300,
                  },
              "foot_toes":
                  {
                    "name": "Стопа + пальцы",
                    "code": "foot_toes",
                    "price":650,
                  }

            }
            break;
          case "back_and_belly":
            this.services= {
              "full_belly":
                  {
                    "name": "Живот полностью",
                    "code": "full_belly",
                    "price":1300,
                  },
              "white_line_abdomen":
                  {
                    "name": "Белая линия живота",
                    "code": "white_line_abdomen",
                    "price":585,
                  },
              "full_back":
                  {
                    "name": "Спина полностью",
                    "code": "full_back",
                    "price":1950,
                  },
              "small_back":
                  {
                    "name": "Поясница",
                    "code": "small_back",
                    "price":1040,
                  },
              "full_chest":
                  {
                    "name": "Грудь полностью",
                    "code": "full_chest",
                    "price":1690,
                  },
              "areolas_nipples":
                  {
                    "name": "Ареолы сосков",
                    "code": "areolas_nipples",
                    "price":585,
                  },


            }
            break;
        }
      } else if(this.floor === 'man' && this.laser === 'alexandrite_laser'){ //Лазерная эпиляция (Candela GentleLase Pro, мужчины)
        switch (this.choose_zone){
          case "face_and_neck":
            this.services= {
              "full_face":
                  {
                    "name": "Лицо полностью",
                    "code": "full_face",
                    "price":3510,
                  },
              "neck_front":
                  {
                    "name": "Шея спереди",
                    "code": "neck_front",
                    "price":910,
                  },
              "back_neck":
                  {
                    "name": "Шея сзади",
                    "code": "back_neck",
                    "price":910,
                  },
              "beard_correction":
                  {
                    "name": "Коррекция бороды",
                    "code": "beard_correction",
                    "price":2500,
                  },
              "nustache":
                  {
                    "name": "Усы",
                    "code": "nustache",
                    "price":780,
                  },
              "eyebrow":
                  {
                    "name": "Межбровье",
                    "code": "eyebrow",
                    "price":390,
                  },
              "sideburns":
                  {
                    "name": "Бакенбарды",
                    "code": "sideburns",
                    "price":910,
                  },
              "cheeks":
                  {
                    "name": "Щеки",
                    "code": "cheeks",
                    "price":910,
                  },
              "chin":
                  {
                    "name": "Подбородок",
                    "code": "chin",
                    "price":910,
                  },
              "lob":
                  {
                    "name": "Лоб",
                    "code": "lob",
                    "price":910,
                  },
              "mustache":
                  {
                    "name": "Усы",
                    "code": "mustache",
                    "price":910,
                  },
              "nostrils":
                  {
                    "name": "Ноздри",
                    "code": "nostrils",
                    "price":780,
                  },


            }
            break;
          case "arms":
            this.services= {
              "hands_completely":
                  {
                    "name": "Руки полностью",
                    "code": "hands_completely",
                    "price":3510,
                  },
              "armpits":
                  {
                    "name": "Подмышечные впадины",
                    "code": "armpits",
                    "price":1820,
                  },
              "forearm":
                  {
                    "name": "Предплечье",
                    "code": "forearm",
                    "price":2340,
                  },
              "hands_fingers":
                  {
                    "name": "Кисти рук+пальцы",
                    "code": "hands_fingers",
                    "price":910,
                  },

            }
            break;
          case "legs":
            this.services= {
              "full_legs":
                  {
                    "name": "Ноги полностью",
                    "code": "full_legs",
                    "price":8710,
                  },
              "hips":
                  {
                    "name": "Бедра",
                    "code": "hips",
                    "price":5070,
                  },
              "knees":
                  {
                    "name": "Колени",
                    "code": "knees",
                    "price":1560,
                  },
              "shins":
                  {
                    "name": "Голени",
                    "code": "shins",
                    "price":4160,
                  },
              "foot_toes":
                  {
                    "name": "Стопа + пальцы",
                    "code": "foot_toes",
                    "price":910,
                  }

            }
            break;
          case "back_and_belly":
            this.services= {
              "full_belly":
                  {
                    "name": "Живот полностью",
                    "code": "full_belly",
                    "price":2210,
                  },
              "white_line_abdomen":
                  {
                    "name": "Белая линия живота",
                    "code": "white_line_abdomen",
                    "price":910,
                  },
              "full_back":
                  {
                    "name": "Спина полностью",
                    "code": "full_back",
                    "price":4290,
                  },

              "small_back":
                  {
                    "name": "Поясница",
                    "code": "small_back",
                    "price":1690,
                  },
              "full_chest":
                  {
                    "name": "Грудь полностью",
                    "code": "full_chest",
                    "price":2340,
                  },
              "areolas_nipples":
                  {
                    "name": "Ареолы сосков",
                    "code": "areolas_nipples",
                    "price":910,
                  },
              "neckline":
                  {
                    "name": "Декольте",
                    "code": "neckline",
                    "price":1170,
                  },

            }
            break;
        }
      }*/
    },
    val_service: function (){
      if(this.val_service.length > 0){
        this.isSelectedServices=true;
        this.SelectedServices=[];
        let tmpPrice=0;
        for (let i = 0; i < this.val_service.length; i++) {

          let code = this.val_service[i];

          if(this.Allservices[this.floor][this.laser][this.choose_zone][code] !== undefined){
            tmpPrice = tmpPrice +this.Allservices[this.floor][this.laser][this.choose_zone][code].price;


            this.SelectedServices[i]=this.Allservices[this.floor][this.laser][this.choose_zone][code];
          }

        }
        this.price =tmpPrice;

      } else {
        this.SelectedServices=[];
        this.price=0;
      }

    }


  },
  methods:{
    showModal: function (){
      this.isActive = !this.isActive,
      this.currentStep= 1,
      this.val_service=[],
      this.SelectedServices={},
      this.val_service=[],
      this.floor='',
      this.laser='',
      this.choose_zone='',
      this.price='',
      this.first_visit=false,
      this.isShowChooseZone=false,
      this.isSelectedServices=false,
      this.$store.dispatch('clearServices');
      this.$store.dispatch('clearPrice');

    },
    removeService: function (index){
      console.log(index)
      this.$store.dispatch('removeServices', index);
    },
    removeServiceTmp: function (code){
      document.getElementById(code).click();

    },

    addServices: function (){
      this.$store.dispatch('addServices', this.SelectedServices);
      this.$store.dispatch('addPrice', this.price);
      this.services={};
      this.SelectedServices=[];
      this.price=0;
      this.choose_zone='';
    },
    goToStep: function(step) {
      if(step == 2){
        this.$store.dispatch('addServices', this.SelectedServices);
        this.$store.dispatch('addPrice', this.price);
        this.SelectedServices=[];
        this.price=0;
        this.choose_zone='';
      }
      this.currentStep = step;
    },
    onSubmit(values) {
      console.log(values);
      console.log(this.$store.state.services);
      console.log(this.allPrice);

      const data = { form: values, floor:this.floor, laser:this.laser, servise:this.$store.state.services, price: this.allPrice};
      /*const data={'form':1}
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      };
      axios.get("https://script.kdm1.ru/epiliumclinic/", data,{headers})
          .then(response => {
            console.log(response);
          });*/


      axios.get('https://script.kdm1.ru/epiliumclinic/', {
        params: {
          q: data
        }
      }).then(response => {
        if(response.data === 'OK'){
          this.currentStep=3;
        }
      });



      //this.goToStep(2);
    },
    validatePhone(value) {
      // if the field is empty
      let im = new Inputmask("+7 (999) 999 99-99");
      im.mask(document.getElementById('phone-mask'));
      if (!value) {
        return 'Телефон не заполнен';
      }
      // if the field is not a valid email
     /* const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }*/
      // All is good
      return true;
    },
    validateText(value) {
      // if the field is empty
      if (!value) {
        return 'Введите имя';
      }
      return true;
    },
  }
}
</script>
