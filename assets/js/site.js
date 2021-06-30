LYKENET = new Object
city = new Object
$whats = '0800 580 4103'
$(document).ready(function () {

  // Activate smooth scroll on page load with hash links in the url
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      var scrollto = $(initial_nav).offset().top - scrolltoOffset;
      $('html, body').animate({
        scrollTop: scrollto
      }, 1500, 'easeInOutExpo');
    }
  }
  escolherCidade()
})

// Intro carousel
var introCarousel = $(".carousel");
var introCarouselIndicators = $(".carousel-indicators");
introCarousel.find(".carousel-inner").children(".carousel-item").each(function (index) {
  (index === 0) ?
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
});

introCarousel.on('slid.bs.carousel', function (e) {
  $(this).find('h2').addClass('animate__animated animate__fadeInDown');
  $(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
});


// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});
$('.back-to-top').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 1500, 'easeInOutExpo');
  return false;
});

// Smooth scroll for the navigation menu and links with .scrollto classes
var scrolltoOffset = $('#header').outerHeight() - 17;
$(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    if (target.length) {
      e.preventDefault();

      var scrollto = target.offset().top - scrolltoOffset;

      if ($(this).attr("href") == '#header') {
        scrollto = 0;
      }

      $('html, body').animate({
        scrollTop: scrollto
      }, 1500, 'easeInOutExpo');

      if ($(this).parents('.nav-menu, .mobile-nav').length) {
        $('.nav-menu .active, .mobile-nav .active').removeClass('active');
        $(this).closest('li').addClass('active');
      }

      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('fas fa-bars fas fa-times');
        $('.mobile-nav-overly').fadeOut();
      }
      return false;
    }
  }
});

function sendEmail () {
  Swal.fire(
    'Email enviado!',
    '',
    'success'
  )
}

function abrirWhats(textPlano){
  window.open(`https://api.whatsapp.com/send?phone=5508005804103&text=${textPlano}`);
}

async function escolherCidade() {

  const { value: cidade } = await Swal.fire({
    title: 'Escolha a sua localização',
    input: 'select',
    imageUrl: '/lykenet-dev/assets/img/unidades/LYKENET_LOCALIZACAO.png',
    background: 'f3f3f3',
    imageAlt: 'Custom image',
    customClass: {
      image: 'img-fluid',
      content: 'swal-font',
      actions: 'swal-font',
      confirmButton: 'swal-btn',
      popup: 'swal-pop'
    },
    inputPlaceholder: 'Selecione',
    inputOptions: {
      FazendaRioGrande: 'Fazenda Rio Grande',
      Araucaria1: 'Araucária (Cachoeira)',
      Araucaria2: 'Araucária (Capela Velha)',
      AraucariaRural: 'Araucária Rural',
      Curitiba: 'Curitiba',
      'Bairros': {
      Pinheirinho: 'Pinheirinho',
      Tatuaquara: 'Tatuaquara',
      CampoSantana: 'Campo de Santana',
    }
    },
    showCancelButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    confirmButtonText: 'Seguir para o site',
    inputValidator: (value) => {
      if (!value) {
        return 'Escolha uma cidade!'
      }
    }
  })
  if(cidade === "Curitiba" ){
    city.localizacao = 'Curitiba'
    city.name = 'Curitiba'
    city.rua = 'Rua Margarida de Andrade Weber, 601 - CIC'
    city.whats= '(41) 3246 4142'
    city.tel = '(41) 3246 4142'
    city.site = 'https://central.lykenet.com.br/central_assinante_web/login'
  }

  if(cidade === "Pinheirinho" ){
    city.localizacao = 'Pinheirinho'
    city.name = 'Araucária'
    city.rua = 'Rua Manoel Ribas, nº 1357, Cachoeira'
    city.whats = '(41) 4063 7444'
    city.tel = '(41) 4063 7444'
    city.site = 'https://araucaria.lykenet.com.br/central_assinante_web/'
  }
  // if(cidade === "CidadeIndustrialCuritiba" ){
  //   city.localizacao = 'Cidade Industrial Curitiba'
  //   city.name = 'Curitiba'
  //   city.rua = 'Rua Margarida de Andrade Weber, 601 - CIC'
  //   city.whats= '(41) 3246 4142'
  //   city.tel = '(41) 3246 4142'
  //   city.site = 'https://central.lykenet.com.br/central_assinante_web/login'
  // }
  if(cidade === "Tatuaquara" ){
    city.localizacao = 'Tatuaquara'
    city.name = 'Curitiba'
    city.rua = 'Rua Margarida de Andrade Weber, 601 - CIC'
    city.whats= '(41) 3246 4142'
    city.tel = '(41) 3246 4142'
    city.site = 'https://central.lykenet.com.br/central_assinante_web/login'
  }
  if(cidade === "Campo de Santana" ){
    city.localizacao = 'Campo de Santana'
    city.name = 'Curitiba'
    city.rua = 'Rua Margarida de Andrade Weber, 601 - CIC'
    city.whats= '(41) 3246 4142'
    city.tel = '(41) 3246 4142'
    city.site = 'https://central.lykenet.com.br/central_assinante_web/login'
  }
  // if(cidade === "CapaoRaso" ){
  //   city.localizacao = 'Capão Raso'
  //   city.name = 'Curitiba'
  //   city.rua = 'Rua Margarida de Andrade Weber, 601 - CIC'
  //   city.whats= '(41) 3246 4142'
  //   city.tel = '(41) 3246 4142'
  // }

  if(cidade === "AraucariaRural" ){
    city.localizacao = 'Araucária Rural'
    city.name = 'Curitiba'
    city.rua = 'Rua Margarida de Andrade Weber, 601 - CIC'
    city.whats= '(41) 3246 4142'
    city.tel = '(41) 3514 4999'
    city.site = 'https://fazenda.lykenet.com.br/central_assinante_web/login'
  }

  if (cidade === 'FazendaRioGrande') {
    city.localizacao = 'Fazenda Rio Grande'
    city.name = 'Fazenda Rio Grande'
    city.rua = 'Rua Nossa Senhora Aparecida ,1425'
    city.whats= '(41) 3246 4142'
    city.tel = '(41) 3514 4999'
    city.site = 'https://fazenda.lykenet.com.br/central_assinante_web/login'
  }
  if (cidade === 'Araucaria1') {
    city.localizacao = 'Araucária Matriz'
    city.name = 'Araucária Matriz'
    city.rua = 'Rua Manoel Ribas, nº 1357, Cachoeira'
    city.whats= '(41) 4063 7444'
    city.tel = '(41) 4063 7444'
    city.site = 'https://araucaria.lykenet.com.br/central_assinante_web/'
  }
  if (cidade === 'Araucaria2') {
    city.localizacao = 'Araucária Filial'
    city.name = 'Araucária Filial'
    city.rua = 'Rua Uirapuru, nº 907, Capela Velha'
    city.whats= '(41) 4063 7444'
    city.tel = '(41) 4063 7444'
    city.site = 'https://araucaria.lykenet.com.br/central_assinante_web/'
  }

  $('.cidadeEscolhida').text(`${city.localizacao}`);
  $('#cidadeContato').text(`${city.name}`);
  $('#address').text(`${city.rua}`);
  $('#tel').text('0800-580-4103');
  $('.areaAssinante').attr('href', city.site)



  // $.ajax({
  //     url: `https://viacep.com.br/ws/${cep}/json/?callback=`,
  //     contentType: "application/json",
  //     statusCode: {
  //       200: function(data) { 

  //         $('#localidade').text(`${data.localidade}`)

  //         } // Ok
  //       ,400: async function(msg) { 
  //          await Swal.fire(msg);  } // Bad Request
  //       ,404: async function(msg) {
  //            await Swal.fire("CEP não encontrado!!"); } // Not Found
  //     }
  //   });

}

// Mobile Navigation
if ($('.nav-menu').length) {
  var $mobile_nav = $('.menu-top').clone().prop({
    class: 'mobile-nav d-lg-none margin-info'
  });
  var $mobile_nav_info = $('.menu-info').clone().prop({
    class: 'mobile-nav-info d-lg-none'
  });
  $('body').append($mobile_nav_info);
  $('#cidadeEscolhida').html('asdasd')
  $('body').append($mobile_nav);
  $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fas fa-bars"></i></button>');
  $('body').append('<div class="mobile-nav-overly"></div>');

  $(document).on('click', '.mobile-nav-toggle', function (e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('fas fa-bars fas fa-times');
    $('.mobile-nav-overly').toggle();
  });

  $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
    e.preventDefault();
    $(this).next().slideToggle(300);
    $(this).parent().toggleClass('active');
  });

  $(document).click(function (e) {
    var container = $(".mobile-nav, .mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('fas fa-bars fas fa-times');
        $('.mobile-nav-overly').fadeOut();
      }
    }
  });
} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
  $(".mobile-nav, .mobile-nav-toggle").hide();
}



// Header scroll class
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  } else {
    $('#header').removeClass('header-scrolled');
  }
});

if ($(window).scrollTop() > 100) {
  $('#header').addClass('header-scrolled');
}

// Navigation active state on scroll
var nav_sections = $('section');
var main_nav = $('.nav-menu, .mobile-nav');

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop() + 200;

  nav_sections.each(function () {
    var top = $(this).offset().top,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      if (cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
      }
      main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
    }
    if (cur_pos < 300) {
      $(".nav-menu ul:first li:first").addClass('active');
    }
  });
});
