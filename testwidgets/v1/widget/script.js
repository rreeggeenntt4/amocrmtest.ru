define(['jquery'], function ($) {
    var CustomWidget = function () {
        var self = this, system = self.system;
        this.callbacks = {
            settings: function () {

            }, init: function () {
                /*$.getScript("http://ajax.googleapis.com/ajax/libs/prototype/1.6.0.2/prototype.js", function (data, textStatus, jqxhr) {
                 });*/
                return true;
            },
            bind_actions: function () {

                $('.print-calc-form-button').on('click', function () {
                    $('.mgc-template-modal').remove();

                    $calc_container = '<form id="form"> <table> <tr><td width="100px">Вид продукции</td><td width="300px"><input type="text" name="product_type" value="Наружная реклама"></td></tr> <tr><td>Продукция</td><td><input type="text" name="product" value="Световой короб"></td></tr> <tr><td>Тип изделия</td><div class="color-calc"><td> <select id="color-calc" name="item_type" style="width:100%; background-color:white" > <option value="">-------</option> <option value="square_lightbox">Прямой световой короб</option> <option value="composite_lightbox">Композитный световой короб</option> <option value="shaped_lightbox">Фигурный клееный световой короб</option> <option value="shaped_twosided_lightbox">Двусторонний фигурный световой короб</option> <option value="click_data_lightbox">Лайтбокс со сменной информацией Click</option> </select></td></div> </tr> <tr><td>Высота, м</td><td><input type="text" placeholder="например, 1 или 1.5" name="height"></td></tr> <tr><td>Ширина, м</td><td><input type="text" placeholder="например, 2.5" name="width"></td></tr> </table> <a href="#" class="submit-button">Рассчитать</a> </form> <div id="result" style="padding:10px;"> </div>';

                    $('body').append('<div class="modal modal-list modal_print-calc modal_calc-action mgc-calc-modal"> <div class="modal-scroller custom-scroll"> <div class="modal-body modal-body-relative"> <div class="modal-body__inner"> <div class="calc-action__header"><h2 class="calc-action__caption head_2">Расчет стоимости полиграфии</h2> <div class="calc-action__top-controls"> <button type="button" class="button-input button-cancel " tabindex="" id="" style=""><span>Закрыть</span></button> </div> </div>' + $calc_container + ' </div> </div> <div class="default-overlay modal-overlay default-overlay-visible"><span class="modal-overlay__spinner spinner-icon spinner-icon-abs-center"style="display: none;"></span></div> </div> </div>');

                    $('.mgc-calc-modal .button-cancel').on('click', function () {
                        $('.mgc-calc-modal').remove();
                    });
                    $('.mgc-calc-modal .submit-button').on('click', function (e) {
                        e.preventDefault();
                        var formEl = $('.mgc-calc-modal form'),
                            formData = formEl.serialize();
                        $.get("", formData)
                            .done(function (data) {
                                //console.log("Data Loaded: " + data);
                                $('.mgc-calc-modal #result').empty().append(data);
                                formEl[0].reset();
                            });
                    });


                }),



                $('.print-calc2-form-button').on('click', function () {
                    $('.mgc-template-modal').remove();


		     $calc_container = '<form id="form"> <table> <tr><td>Вид продукции</td><td width="300px"><input type="text" name="product_type" value="Широкоформатная печать" style="width:100%"></td></tr> <tr><td>Продукция</td><td><input type="text" name="product" value="Объемные буквы" style="width:100%" ></td></tr> <tr><td>Тип изделия</td><td> <select name="item_type" style="width:100%;background-color:white" > <option value="">-------</option> <option value="pseudo_not_light">Псевдообъемные не световые буквы</option> <option value="volumetric_als">Объемные буквы световые, бок не световой (ALS)</option> <option value="volumetric_pvc">Объемные буквы световые, бок не световой (ПВХ)</option> <option value="volumetric_side_light">Объемные буквы световые, бок световой</option> <option value="volumetric_kontrazhur">Объемные буквы световые «контражур» </option> </select> </td></tr> <tr><td>Засечки</td><td> <select name="width" style="width:100%;background-color:white" > <option value="">-------</option> <option value="sansserif">Без засечек</option> <option value="serif">С засечками</option> <option value="decorative">Декоративный</option> </select> </td></tr> <tr><td>Фраза</td><td><input type="text" placeholder="Слово или фраза" name="number_of_letters" style="width:100%"></td></tr> <tr><td>Высота букв</td><td><input type="text" placeholder="Введите значение" name="height" style="width:100%"></td></tr> </table> <a href="#" class="submit-button">Рассчитать</a> </form> <div id="result" style="padding:10px;"> </div>';
		    

                    $('body').append('<div class="modal modal-list modal_print-calc modal_calc-action mgc-calc-modal"> <div class="modal-scroller custom-scroll"> <div class="modal-body modal-body-relative"> <div class="modal-body__inner"> <div class="calc-action__header"><h2 class="calc-action__caption head_2">Расчет стоимости полиграфии</h2> <div class="calc-action__top-controls"> <button type="button" class="button-input button-cancel " tabindex="" id="" style=""><span>Закрыть</span></button> </div> </div>' + $calc_container + ' </div> </div> <div class="default-overlay modal-overlay default-overlay-visible"><span class="modal-overlay__spinner spinner-icon spinner-icon-abs-center"style="display: none;"></span></div> </div> </div>');

                    $('.mgc-calc-modal .button-cancel').on('click', function () {
                        $('.mgc-calc-modal').remove();
                    });
                    $('.mgc-calc-modal .submit-button').on('click', function (e) {
                        e.preventDefault();
                        var formEl = $('.mgc-calc-modal form'),
                            formData = formEl.serialize();
                        $.get("", formData)
                            .done(function (data) {
                                //console.log("Data Loaded: " + data);
                                $('.mgc-calc-modal #result').empty().append(data);
                                formEl[0].reset();
                            });
                    });


                });
		
		
		$('.print-calc3-form-button').on('click', function () {
                    $('.mgc-template-modal').remove();


		     $calc_container = '<form id="form"> <table> <tr><td>Продукция</td><td width="300px"><input type="text" name="product_type" value="Широкоформатная печать" style="width:100%"></td></tr> <tr><td>Качество печати</td><td> <select id="" name="width" style="width:100%;background-color:white" > <option value="">-------</option> <option value="720">720 dpi</option> <option value="1440">1440 dpi</option> <option value="360">360 dpi</option> </select> </td></tr> <tr><td>Материал</td><td> <select id="" name="height" style="width:100%;background-color:white" > <option value="">-------</option> <option value="banner330">Баннер 330г/м2</option> <option value="banner440">Баннер 440г/м2</option> <option value="banner_perforated">Баннер перфорированный</option> <option value="self_adhesive_skin">Пленка самоклеющаяся для печати</option> <option value="skin_perforated">Пленка перфорированная</option> <option value="canvas">Холст синтетика</option> <option value="paper">Бумага постерная</option> </select> </td></tr> <tr><td>Доп. услуги</td><td> <p><input type="checkbox" name="eyelets" value="check1" style="margin: 2px">Люверсы<Br> <input type="checkbox" name="sizing" value="check2" style="margin: 2px">Проклейка<Br> <input type="checkbox" name="perforation" value="check3" style="margin: 2px">Перфорация<Br> <input type="checkbox" name="banner_install" value="check4" style="margin: 2px">Монтаж баннера<Br> <input type="checkbox" name="banner_frame" value="check5" style="margin: 2px">Рамка для баннера<Br> <input type="checkbox" name="framing" value="check6" style="margin: 2px">Монтаж рамки<Br> <!-- <input type="checkbox" name="job" value="check7" style="margin: 2px">Работа</p> --> </select> </td></tr> <tr><td>Высота</td><td><input type="text" name="height_banner" value="" style="width:100%"></td></tr> <tr><td>Ширина</td><td><input type="text" name="width_banner" value="" style="width:100%"></td></tr> </table> <a href="#" class="submit-button">Рассчитать</a> </form> <div id="result" style="padding:10px;"></div>';
		    

                    $('body').append('<div class="modal modal-list modal_print-calc modal_calc-action mgc-calc-modal"> <div class="modal-scroller custom-scroll"> <div class="modal-body modal-body-relative"> <div class="modal-body__inner"> <div class="calc-action__header"><h2 class="calc-action__caption head_2">Расчет стоимости полиграфии</h2> <div class="calc-action__top-controls"> <button type="button" class="button-input button-cancel " tabindex="" id="" style=""><span>Закрыть</span></button> </div> </div>' + $calc_container + ' </div> </div> <div class="default-overlay modal-overlay default-overlay-visible"><span class="modal-overlay__spinner spinner-icon spinner-icon-abs-center"style="display: none;"></span></div> </div> </div>');

                    $('.mgc-calc-modal .button-cancel').on('click', function () {
                        $('.mgc-calc-modal').remove();
                    });
                    $('.mgc-calc-modal .submit-button').on('click', function (e) {
                        e.preventDefault();
                        var formEl = $('.mgc-calc-modal form'),
                            formData = formEl.serialize();
                        $.get("", formData)
                            .done(function (data) {
                                //console.log("Data Loaded: " + data);
                                $('.mgc-calc-modal #result').empty().append(data);
                                formEl[0].reset();
                            });
                    });


                });
		
		
                return true;
            },
            render: function () {
                var lang = self.i18n('userLang');
                w_code = self.get_settings().widget_code;
                if (typeof(AMOCRM.data.current_card) != 'undefined') {
                    if (AMOCRM.data.current_card.id == 0) {
                        return false;
                    }
                }
                self.render_template({
                    caption: {
                        class_name: 'js-ac-caption',
                        html: ''
                    },
                    body: '',
                    render: '<div class="ac-form"><div class="print-calc-form-button ac_sub">Наружная реклама</div></div><link type="text/css" rel="stylesheet" href="/upl/' + w_code + '/widget/style.css" > <div class="ac-form"><div class="print-calc2-form-button ac_sub">Широкоформатная печать</div></div><link type="text/css" rel="stylesheet" href="/upl/' + w_code + '/widget/style.css" > <div class="ac-form"><div class="print-calc3-form-button ac_sub">Печать баннеров</div></div><link type="text/css" rel="stylesheet" href="/upl/' + w_code + '/widget/style.css" >'
                });
                return true;
            },
            contacts: {
                selected: function () {
                    var c_data = self.list_selected().selected;
                    console.log(c_data);

                    var names = [],
                        length = c_data.length;
                    for (var i = 0; i < length; i++) {
                        names[i] = {
                            ecalcs: c_data[i].ecalcs,
                            phones: c_data[i].phones
                        };
                    }
                    console.log(names);
                    for (var i = 0; i < length; i++) {

                    }
                    $(self.contacts).remove();
                    self.contacts = names;
                }
            },
            leads: {
                selected: function () {

                }
            },
            onSave: function () {

                return true;
            }
        };
        return this;
    };
    return CustomWidget;
});