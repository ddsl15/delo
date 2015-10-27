release_on_section_changed = []

function section_changed() {
  _.each(release_on_section_changed, function(fn) {fn()})
  release_on_section_changed = []
}


function elem_hover_img_change(elem_sel, img_sel, imgsrc_hovered, imgsrc_regular) {
  $(elem_sel).hover(
    function() { $(img_sel).attr("src", imgsrc_hovered) },
    function() { $(img_sel).attr("src", imgsrc_regular) }
  )
}

function bind_tile_hovers() {
  elem_hover_img_change("#itcompany_tile", "#itcompany_tile_image", "images/it_firm_icon_active.png", "images/it_firm_icon.png")
  elem_hover_img_change("#engineer_tile", "#engineer_tile_image", "images/dev_icon_active.png", "images/dev_icon.png")
  elem_hover_img_change("#business_tile", "#business_tile_image", "images/client_icon_active.png", "images/client_icon.png")
}


function bind_tile_actions() {
  function tile_action(tile_sel, show_sel) {
    $(tile_sel).click(function() {
      $(".main-section").hide()
      $(".target-audience-section").show()
      $(".target-speech").hide()
      $(show_sel).show()
      section_changed()
    })
  }
  tile_action("#itcompany_tile", "#speech_for_itcompany")
  tile_action("#engineer_tile", "#speech_for_engineer")
  tile_action("#business_tile", "#speech_for_business")
}

function bind_topic_switcher_actions() {
  function switcher_action(switch_sel, show_sel) {
    $(switch_sel).click(function() {
      $(this).addClass("active")
      $(".main-section").hide()
      $(".activity-topic-section").show()
      $(".activity-topic").hide()
      $(show_sel).show()
      section_changed()
      release_on_section_changed.push(function() {$(switch_sel).removeClass("active");})
    })
  }
  switcher_action("#activity_switcher_robots", "#robots_topic")
  switcher_action("#activity_switcher_ml", "#machine_learning_topic")
  switcher_action("#activity_switcher_cv", "#computer_vision_topic")
  switcher_action("#activity_switcher_optimization", "#optimization_topic")
  switcher_action("#activity_switcher_algorithms", "#algorithms_topic")
}

function bind_logo_click() {
  $("#logo_container").click(function() {
    $(".main-section").hide()
    $(".about-us-section").show()
    section_changed()
  })
}

function bind_actions() {
  bind_tile_actions()
  bind_topic_switcher_actions()
  bind_logo_click()
}

$(function() {
  bind_tile_hovers()
  bind_actions()
})
