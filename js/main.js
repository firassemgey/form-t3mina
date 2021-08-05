
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input3').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
            

    /*==================================================================
    [ Chose Radio ]*/
    $("#radio1").on('change', function(){
        if ($(this).is(":checked")) {
            $('.input3-select').slideUp(300);
            $('.slide').slideDown(300);

        }
    });

    $("#radio2").on('change', function(){
        if ($(this).is(":checked")) {
            $('.input3-select').slideDown(300);
            $('.slide').slideUp(300);

        }
    });


    
    /*==================================================================
    [ Validate ]*/
    var Restaurant = $('.validate-input input[name="Restaurant"]');
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var phone = $('.validate-input input[name="phone"]');
    var service = $('.validate-input select[name="service"]');
    var budget = $('.validate-input select[name="budget"]');
    var message = $('.validate-input textarea[name="message"]');



            $('.validate-form').on('submit', function () {

                if($("#radio1").prop("checked"))
                {

                    var check=true
                    if ($(Restaurant).val().trim() == '') {
                        showValidate(Restaurant);
                        check = false;
                    }

                    if ($(Restaurant).val().length < 3) {
                        showValidate(Restaurant);
                        check = false;
                    }


                    if ($(name).val().length < 3) {
                        showValidate(name);
                        check = false;
                    }

                    if ($(name).val().trim() == '') {
                        showValidate(name);
                        check = false;
                    }

                    if ($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) !== null) {
                        showValidate(email);
                        check = false;
                    }

                    if ($(phone).val().length < 10) {
                        showValidate(phone);
                        check = false;
                    }

                    if ($(phone).val().length > 10) {
                        showValidate(phone);
                        check = false;
                    }

                    if ($(phone).val().trim() == '') {
                        showValidate(phone);
                        check = false;
                    }

                    if ($(message).val().trim() == '') {
                        showValidate(message);
                        check = false;
                    }

                    if ($(message).val().length < 5) {
                        showValidate(message);
                        check = false;
                    }

                    if($(budget).val().trim() == 'المدينة' ){
                        showValidate(budget);
                        check = false;

                    }

                    return check;
                }


            });


    $('.validate-form').on('submit', function () {


        if($("#radio2").prop("checked"))
        {

            var check=true
            if ($(name).val().length < 3) {
                showValidate(name);
                check = false;
            }

            if ($(name).val().trim() == '') {
                showValidate(name);
                check = false;
            }

            if ($(phone).val().length < 10) {
                showValidate(phone);
                check = false;
            }

            if ($(phone).val().length > 10) {
                showValidate(phone);
                check = false;
            }

            if ($(phone).val().trim() == '' ) {
                showValidate(phone);
                check = false;
            }

            if($(service).val().trim() == 'المركبة' ){
                showValidate(service);
                check = false;

            }

            if($(budget).val().trim() == 'المدينة' ){
                showValidate(budget);
                check = false;

            }


            return check;



        }

    });

    $('.validate-form .input3').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input,select) {
        var thisAlert = $(input,select).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input,select) {
        var thisAlert = $(input,select).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);