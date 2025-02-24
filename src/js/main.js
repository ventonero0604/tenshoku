import $ from "jquery";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

$(function () {
  /* 
    グローバルメニュー
  */
  document.querySelector(".js-trigger").addEventListener("click", function () {
    this.classList.toggle("is-open");
    const el = document.querySelector(".js-navi");
    el.classList.toggle("is-open");
    document.body.classList.toggle("is-fixed");
  });

  /* 
    条件で転職サイトを探す
  */
  if ($(".js-SearchExpand").length) {
    var count_ul = $("#step_area .step_count ul");
    if (count_ul.length > 0) {
      var li = [];
      for (let i = 1; i <= $("#step_area .step_body .step").length; i++) {
        li.push(
          "<li" + (i === 1 ? ' class="active"' : "") + ">Q" + i + "</li>"
        );
      }
      count_ul[0].innerHTML = li.join("");
    }
    var first_step = $("#step_area .step_body .step").eq(0);
    var index = $("#step_area .step_body .step").index(first_step);

    countSet(index);
    titleSet(index + 1, first_step.data("title"));

    // 単一選択ラベルクリック
    $(document).on(
      "click",
      "#step_area .step_body .step.radios_wrap.not_last label",
      function (e) {
        var step = $(this).closest(".step");
        var next_step = step.next(".step");
        var index = $("#step_area .step_body .step").index(next_step);

        countSet(index);
        titleSet(index + 1, next_step.data("title"));

        step.removeClass("open");
        next_step.addClass("open");
      }
    );

    // 戻るボタンクリック
    $(document).on(
      "click",
      "#step_area .step_body .step button.prev",
      function (e) {
        var step = $(this).closest(".step");
        var prev_step = step.prev(".step");
        var index = $("#step_area .step_body .step").index(prev_step);

        countSet(index);
        titleSet(index + 1, prev_step.data("title"));

        step.removeClass("open");
        prev_step.addClass("open");
      }
    );

    // 次へボタンクリック
    $(document).on(
      "click",
      "#step_area .step_body .step button.next",
      function (e) {
        var step = $(this).closest(".step");
        var next_step = step.next(".step");
        var index = $("#step_area .step_body .step").index(next_step);

        countSet(index);
        titleSet(index + 1, next_step.data("title"));

        step.removeClass("open");
        next_step.addClass("open");
      }
    );

    function titleSet(i, String) {
      $("#step_area .step_title")[0].innerHTML =
        "<span>Q" + i + ".</span>" + String;
    }

    function countSet(index) {
      for (let i = 0; i <= index; i++) {
        if (!$("#step_area .step_count ul li").eq(i).hasClass("active"))
          $("#step_area .step_count ul li").removeClass("active");
        $("#step_area .step_count ul li").eq(i).addClass("active");
      }
    }
  }

  /* 
     比較表の星をfillする
  */
  if ($(".js-rate").length) {
    function setRatings() {
      $(".js-rate").each(function () {
        const rateElement = $(this);
        const rating = parseFloat(rateElement.text().trim());
        const svgElement = rateElement.next(".rating"); // .js-rateの次にある.ratingを取得

        if (svgElement.length) {
          const stars = svgElement.find(".star");
          stars.each(function () {
            const index = parseInt($(this).attr("data-index"), 10);
            if (index <= Math.floor(rating)) {
              $(this).addClass("filled"); // 完全に塗りつぶす
              $(this).css("fill", "var(--gold, #b59443)");
            } else if (index === Math.ceil(rating)) {
              const fraction = rating % 1;
              $(this).css(
                "fill",
                `url(#partial-fill-${index}-${Math.random()})`
              );
              createPartialFill($(this)[0], fraction, index);
            } else {
              $(this).removeClass("filled");
              $(this).css("fill", "white"); // 塗りつぶさない部分を白に
            }
          });
        }
      });
    }

    function createPartialFill(star, fraction, index) {
      const defs = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "defs"
      );
      const linearGradient = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "linearGradient"
      );
      const gradientId = `partial-fill-${index}-${Math.random()}`;
      linearGradient.setAttribute("id", gradientId);
      linearGradient.setAttribute("x1", "0%");
      linearGradient.setAttribute("y1", "0%");
      linearGradient.setAttribute("x2", "100%");
      linearGradient.setAttribute("y2", "0%");

      const stop1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "stop"
      );
      stop1.setAttribute("offset", `${fraction * 100}%`);
      stop1.setAttribute(
        "style",
        "stop-color:var(--gold, #b59443);stop-opacity:1"
      );

      const stop2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "stop"
      );
      stop2.setAttribute("offset", `${fraction * 100}%`);
      stop2.setAttribute("style", "stop-color:white;stop-opacity:1");

      linearGradient.appendChild(stop1);
      linearGradient.appendChild(stop2);
      defs.appendChild(linearGradient);
      star.parentNode.insertBefore(defs, star);

      // Apply the gradient
      star.style.fill = `url(#${gradientId})`;
    }

    // DOMが完全に読み込まれた後にすべての評価を設定
    setRatings();
  }

  /* 
     ランキング内「利用した方のクチコミ」のexpand
  */
  if ($(".js-user-expand").length) {
    $(".js-user-expand").on("click", function () {
      const $button = $(this);
      const $container = $button.prev(".js-user-container");

      // コンテナが見つからない場合のデバッグ用ログ
      if ($container.length === 0) {
        console.error("js-user-container が見つかりませんでした。");
        return;
      }

      $button.toggleClass("is-open");
      $container.toggleClass("is-open");

      // ボタンのテキストを切り替える
      if ($button.hasClass("is-open")) {
        $button.find("span").text("閉じる");
      } else {
        $button.find("span").text("もっと読む");
      }
    });
  }

  /* 
     カルーセル
  */
  if ($(".swiper").length) {
    const swiper = new Swiper(".swiper", {
      modules: [Pagination],
      centeredSlides: true,
      slidesPerView: 1.3,
      spaceBetween: 20,
      loop: $(".js-swiper-center").length,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  /* 
     コンテンツ切り替え
  */
  if ($(".Format_2").length || $(".Format_3").length) {
    const buttons = document.querySelectorAll(".js-button");
    const contents = document.querySelectorAll(".js-contents");
    const wordSwitch = document.querySelector(".js-wordSwitch");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        // すべてのボタンからis-activeクラスを削除
        buttons.forEach((btn) => btn.classList.remove("is-active"));
        // クリックされたボタンと同じdata-typeを持つボタンにis-activeクラスを追加
        const type = button.getAttribute("data-type");
        buttons.forEach((btn) => {
          if (btn.getAttribute("data-type") === type) {
            btn.classList.add("is-active");
          }
        });

        // すべてのコンテンツからis-visibleクラスを削除
        contents.forEach((content) => {
          content.classList.remove("is-visible", "fade-in");
        });

        // 対応するdata-typeを持つすべてのコンテンツにis-visibleクラスを追加
        contents.forEach((content) => {
          if (content.getAttribute("data-type") === type) {
            content.classList.add("is-visible");
            // 次のフレームでfade-inクラスを追加してアニメーションを適用
            requestAnimationFrame(() => {
              content.classList.add("fade-in");
            });
          }
        });

        // js-wordSwitchのテキストを切り替え
        if (wordSwitch && $(".Format_2").length) {
          if (type === "lower") {
            wordSwitch.textContent = "未満";
          } else if (type === "upper") {
            wordSwitch.textContent = "以上";
          }
        }
      });
    });
  }

  /* 
     コンテンツ切り替え
  */
  if ($(".js-Format_3_b_compare_table").length) {
    const compareTableWrapper = document.querySelector(
      ".Format_3_b_compare_table_wrapper"
    );

    if (compareTableWrapper) {
      compareTableWrapper.addEventListener("scroll", () => {
        if (compareTableWrapper.scrollLeft > 0) {
          compareTableWrapper.classList.add("is-scrolled");
        } else {
          compareTableWrapper.classList.remove("is-scrolled");
        }
      });
    }
  }
});
