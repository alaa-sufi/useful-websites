import React, { useState } from "react";
import "./style.scss";

export default function App() {
  const showMore = (e) => {
    e.target.parentElement.style.overflow = "scroll";
    e.target.parentElement.childNodes.forEach((x) =>
      x.classList.remove("d-none")
    );
    e.target.classList.add("d-none");
  };
  const showLess = (e) => {
    e.target.parentElement.style.overflow = "hidden";
    e.target.parentElement.childNodes.forEach(
      (x, i) => i > 4 && x.classList.add("d-none")
    );
    e.target.classList.add("d-none");
    e.target.previousSibling.classList.remove("d-none");
    // //scroll top
    // $(this).parent(".group").scrollTop($(this).offset().top);
  };
  const [links, setLinks] = useState([
    {
      title: "tailwindcss",
      icon: "fas fa-wind",
      list: [
        { title: "playground", link: "https://play.tailwindcss.com/" },
        { title: "classes", link: "https://tailwind.build/classes" },
        {
          title: "cheatsheet 2.1.0",
          link: "https://tailwindcomponents.com/cheatsheet/"
        },
        {
          title: "colors",
          link: "https://tailwindcss.com/docs/customizing-colors"
        },
        {
          title: "gradient-generator",
          link: "https://tailwindcomponents.com/gradient-generator/"
        },
        {
          title: "convert css to tailwind",
          link: "https://tailwind-converter.netlify.app/"
        },
        {
          title: "generate color shades",
          link: "https://javisperez.github.io/tailwindcolorshades/"
        },

        {
          modalTitle: "components",
          id: "tailwind-component-links",
          modalBody: `<ul style="height:initial">
        <li><a class="d-block fw-bold" target="_blank" href="https://www.tailwind-kit.com/components">Tail Kit -- 250 components <span class="tag">html</span></a></li>
        <li><a class="d-block fw-bold" target="_blank" href="https://mambaui.com/components">Mambaui -- 140 components <span class="tag">html</span><span class="tag">vue</span><span class="tag">jsx</span></a></li>
        <li><a class="d-block fw-bold" target="_blank" href="https://www.gustui.com/docs/application/components/alerts">Gustui -- 50 components <span class="tag">html</span><span class="tag">react</span></a></li>
        <li><a class="d-block fw-bold" target="_blank" href="https://kimia-ui.vercel.app/components/accordion">kimia-ui -- simple <span class="tag">react</span></a></li>
        <li><a class="d-block fw-bold" target="_blank" href="https://merakiui.com/components/">merakiui -- beautiful<span class="tag">html</span><span class="tag">rtl/ltr</span><span class="tag">dark</span></a></li>
        <li><a class="d-block fw-bold" target="_blank" href="https://kitwind.io/products/kometa/components">kitwind -- 130 sections <span class="tag">html</span><span class="tag">vue/ltr</span><span class="tag">react</span></a></li>
        <hr/>
        <h6 class="fw-bold">Other library based</h6>
        <li><a class="d-block fw-bold" target="_blank" href="https://tailwind-elements.com/">Bootstrap components </a></li>
        <li><a class="d-block fw-bold" target="_blank" href="https://flowbite.com/">components in tailwind  <span class="tag">react</span></a><span class="tag">vue</span></a></a></li>
        <li><a class="d-block fw-bold" target="_blank" href="https://merakiui.com/components/">Material Tailwind -- beautiful and big<span class="tag">react</span></a></li>
        <li><a class="d-block fw-bold" target="_blank" href="https://www.vue-tailwind.com/">vue-tailwind -- <span class="tag">vue</span></a></li>
        <li><a class="d-block fw-bold" target="_blank" href="https://daisyui.com/components/button/">daisyui -- <span class="tag">html</span></a></li>
      </ul>`
        },
        {
          modalTitle: "templates",
          id: "tailwind-templates-links",
          modalBody: `<ul style="height:initial">
        <li><a class="d-block fw-bold" target="_blank" href="https://www.tailwind-kit.com/components">Tail Kit -- Dashboards/Landing pages/Errors pages</a></li>
        <li><a class="d-block fw-bold" target="_blank" href="https://mambaui.com/components">Mambaui -- Business/Portfolio</a></li>
        <li><a class="d-block fw-bold" target="_blank" href="https://www.gustui.com/docs/application/components/alerts">Gustui -- Accounts/Dashboards/Onboarding/Other</li>
        <hr/>
        <h6 class="fw-bold">Other library based</h6>
        <li><a class="d-block fw-bold" target="_blank" href="https://merakiui.com/components/">Material Tailwind -- Landing Profile/Login/Register/Dashboard</a></li>
      </ul>`
        }
      ]
    },
    {
      title: "angular",
      icon: "fab fa-angular",
      list: [
        { title: "translate", link: "http://www.ngx-translate.com/" },
        {
          title: "ui",
          list: [
            { title: "material", link: "https://material.angular.io/" },
            {
              title: "ng-bootstrap",
              link: "https://ng-bootstrap.github.io/#/home"
            }
          ]
        },
        {
          title: "icons",
          list: [
            {
              title: "angular",
              link: "https://ng-icons.github.io/ng-icons/#/"
            },
            { title: "fontawsome", link: "" }
          ]
        },
        {
          title: "swipper",
          link: "https://swiperjs.com/"
        },
        {
          title: "toast",
          list: [
            {
              title: "ngx-toastr",
              link: "https://www.npmjs.com/package/ngx-toastr"
            },
            {
              title: "ngneat-hot-toast",
              link: "https://ngneat.github.io/hot-toast/"
            }
          ]
        },
        {
          title: "form",
          link: "https://formly.dev/"
        },
        {
          title: "animate",
          link: "https://www.npmjs.com/package/ng-animate"
        },
        {
          title: "animate",
          link: "https://www.npmjs.com/package/ng-animate"
        },
        {
          title: "table",
          link: "https://swimlane.github.io/ngx-datatable/"
        },
        {
          title: "angular calendar",
          link: "https://mattlewis92.github.io/angular-calendar/#/kitchen-sink"
        },
        {
          title: "ngx-pipes",
          link: "https://www.npmjs.com/package/ngx-pipes"
        },
        {
          title: "loadig routes",
          link: "https://github.com/aitboudad/ngx-loading-bar"
        },
        {
          title: "drag , drop",
          link: "https://valor-software.com/ng2-dragula/"
        },
        {
          title: "angular-google-maps",
          link: ""
        },
        {
          title: "manage state (ngrx)",
          link: ""
        },
        {
          title: "angular2-jwt",
          link: ""
        },
        {
          title: "angularfire",
          link: ""
        },
        {
          title: "charts ",
          list: [
            {
              title: "ng2-charts",
              link: "https://valor-software.com/ng2-charts/"
            },
            {
              title: "ngx-charts",
              link:
                "https://swimlane.github.io/ngx-charts/#/ngx-charts/bar-vertical"
            }
          ]
        }
      ]
    },
    // {
    //   title: "file",
    //   icon: "fa fa-file",
    //   list: [
    //     { title: "upload img", link: "https://alaa-sufi.imgbb.com/" },
    //     { title: "upload file", link: "https://gofile.io/" }
    //   ]
    // },
    {
      title: "choose",
      icon: "fas fa-hand-pointer",
      list: [
        { title: "hamburgers", link: "https://jonsuh.com/hamburgers/" },
        {
          title: "svg icon",
          list: [
            { title: "1", link: "https://heroicons.com/" },
            { title: "2", link: "https://boxicons.com/?query=js" }
          ]
        },
        { title: "animation icon", link: "https://lordicon.com/" },
        { title: "hover", link: "https://ianlunn.github.io/Hover/" },
        {
          title: "loading spinner",
          list: [
            {
              title: "1",
              link: "https://codepen.io/alaa-sufi/pen/MWbYdeb"
            },
            {
              title: "2",
              link: "https://codepen.io/vineethtrv/pen/NWxZqMM"
            },
            { title: "website", link: "https://whirl.netlify.app/" }
          ]
        },
        {
          title: "buttons/toggle/checkbox",
          link: "https://cssbuttons.io/buttons"
        },
        {
          title: "MoreToggles",
          link: "https://jnkkkk.github.io/MoreToggles.css/allToggles.html"
        }
      ]
    },
    {
      title: "react",
      icon: "fab fa-react",
      list: [
        { title: "example", link: "https://reactjsexample.com" },
        { title: "made with react", link: "https://madewithreactjs.com/" },
        { title: "best of", link: "https://bestofreactjs/" },
        {
          title: "icons",
          list: [
            {
              title: "react",
              link: "https://react-icons.github.io/react-icons"
            },
            { title: "iconsax", link: "https://iconsax-react.pages.dev/" },
            { title: "feather", link: "https://feathericons.com/" }
          ]
        },
        {
          title: "ui1",
          list: [
            {
              title: "material ui",
              link: "https://mui.com/getting-started/learn/"
            },
            {
              title: "rsuite",
              link: "https://rsuitejs.com/components/overview/"
            }
          ]
        },
        {
          title: "ui2",
          list: [
            {
              title: "react-bootstrap",
              link: "https://react-bootstrap.github.io/"
            },
            {
              title: "chakra",
              link: "https://chakra-ui.com/"
            }
          ]
        },

        {
          title: "slider",
          list: [
            {
              title: "slick",
              link: "http://kenwheeler.github.io/slick/"
            },
            {
              title: "react-flickity",
              link: "https://www.npmjs.com/package/react-flickity-component"
            },
            {
              title: "swiper",
              link: "https://swiperjs.com/demos"
            }
          ]
        },
        {
          title: "laravel with react",
          link:
            "https://blog.devgenius.io/laravel-7-x-p1-installation-with-react-and-react-router-7713f4748b6f"
        },
        {
          title: "form",
          list: [
            { title: "fromik", link: "https://formik.org/docs/overview" },
            {
              title: "react-hook-form",
              link: "https://react-hook-form.com/"
            },
            {
              title: "react-select",
              link: "https://react-select.com/home"
            },
            {
              title: "use-debounce",
              link: "https://github.com/xnimorz/use-debouncea"
            }
          ]
        },
        { title: "hooks", link: "https://usehooks.com/" },
        {
          title: "tour",
          list: [
            {
              title: "react-shepherd",
              link: "https://shipshape-react-shepherd.netlify.app/"
            },
            { title: "reactour", link: "https://reactour.js.org/" }
          ]
        },
        {
          title: "graphql",
          list: [
            {
              title: "appolo",
              link: "https://www.apollographql.com/docs/react/"
            },
            {
              title: "json-graphql-server",
              link: "https://github.com/marmelab/json-graphql-server"
            }
          ]
        },
        {
          title: "player",
          list: [
            {
              title: "react-player",
              link: "https://github.com/CookPete/react-player"
            }
          ]
        },
        {
          title: "table",
          list: [
            {
              title: "react-data-table-component",
              link: "https://react-data-table-component.netlify.app/"
            },
            {
              title: "react-table",
              link: "https://react-table-v7.tanstack.com/"
            }
          ]
        },
        {
          title: "classnames",
          link: "https://www.npmjs.com/package/classnames"
        },
        {
          title: "time",
          list: [
            {
              title: "moment",
              link: "https://momentjs.com/"
            },
            {
              title: "date-fns",
              link: "https://date-fns.org/"
            }
          ]
        },
        {
          title: "permissions",
          list: [
            {
              title: "casl",
              link: "https://casl.js.org/v6/en/"
            }
          ]
        },
        {
          title: "editors",
          list: [
            {
              title: "code editor",
              link: "https://securingsincity.github.io/react-ace/"
            },
            {
              title: "html editor",
              link: "https://ckeditor.com/"
            },
            {
              title: "marketdown",
              link: "https://react-simplemde-edtior.netlify.app/"
            }
          ]
        },
        {
          title: "react-upload-gallery",
          link: "https://github.com/m-inan/react-upload-gallery"
        },
        {
          title: "text editor",
          link: "https://docs.slatejs.org/libraries/slate-react"
        },
        { title: "translate i18next", link: "https://react.i18next.com/" },
        { title: "auto translate", link: " " },
        {
          title: "animation1",
          list: [
            {
              title: "transition-group",
              link: "https://reactcommunity.org/react-transition-group/"
            },
            {
              title: "motion",
              link: "https://github.com/chenglou/react-motion"
            }
          ]
        },
        {
          title: "animation2",
          list: [
            {
              title: "move(map)",
              link: "https://react-move-docs.netlify.app"
            },
            {
              title: "router transition",
              link: "http://maisano.github.io/react-router-transition/"
            }
          ]
        },
        {
          title: "toaster",
          list: [
            {
              title: "hot",
              link: "https://react-hot-toast.com/"
            },
            {
              title: "toastify",
              link: "https://fkhadra.github.io/react-toastify/introduction"
            },
            {
              title: "sweetAlert",
              link: "https://djorg83.github.io/react-bootstrap-sweetalert/"
            }
          ]
        },

        {
          title: "drag&drop",
          link: "http://bevacqua.github.io/react-dragula/"
        },
        {
          title: "emoji-mart",
          link: "https://www.npmjs.com/package/emoji-mart"
        },
        { title: "react-query", link: "https://react-query-v3.tanstack.com/" },
        {
          modalTitle: "cmd commend",
          id: "react-cmd-commend",
          modalBody: `<ul style="height:initial">
          <h6>run project</h6>
        <li>npm start</li>
        <h6>build project</h6>
        <li>npm run build</li>
        <h6>run project after build</h6>
        <li>npm run start</li>
      </ul>`
        }
      ]
    },
    {
      title: "react native",
      icon: "fab fa-react",
      list: [
        { title: "example", link: "https://reactnativeexample.com/" },
        {
          title: "made with react native",
          link: "https://madewithreactnative.com/"
        },
        {
          title: "ui1",
          list: [
            {
              title: "elements",
              link: "https://reactnativeelements.com/"
            },
            {
              title: "nativebase",
              link: "https://nativebase.io/"
            }
          ]
        },
        {
          title: "ui2",
          list: [
            {
              title: "paper",
              link: "https://reactnativepaper.com/"
            },
            {
              title: "ui kitten",
              link: "https://akveo.github.io/react-native-ui-kitten/"
            },
            {
              title: "material",
              link: "https://www.react-native-material.com/"
            }
          ]
        },
        {
          title: "starter kit",
          list: [
            {
              title: "galio",
              link: "https://galio.io/"
            }
          ]
        },
        { title: "icon", link: "https://icons.expo.fyi/" },
        {
          title: "same react",
          list: [
            {
              title: "toast",
              link: "https://react-hot-toast.com/"
            },
            {
              title: "fromik",
              link: "https://formik.org/docs/overview"
            },
            { title: "iconsax", link: "https://iconsax-react.pages.dev/" },
            { title: "translate i18next", link: "https://react.i18next.com/" },
            {
              title: "tailwind",
              link:
                "https://github.com/jaredh159/tailwind-react-native-classnames"
            }
          ]
        },
        {
          title: "expo",
          link: "https://expo.dev/"
        },
        {
          title: "snack.expo",
          link: "https://snack.expo.dev/"
        },
        {
          title: "templates",
          link: "https://instamobile.io/"
        }
      ]
    },
    {
      title: "Next",
      icon: "fab fa-node-js",
      list: [
        {
          title: "add google analytics",
          link:
            "https://enlear.academy/add-google-analytics-to-a-next-js-application-5525892844db"
        },
        {
          title: "loadig routes",
          link: "https://github.com/victorb/ngProgress"
        },
        {
          modalTitle: "auth",
          id: "next-auth",
          modalBody: `<ul style="height:initial">
          <h6><a href="https://www.youtube.com/watch?v=Urgstu-mCec" target="_blank">youtube link</a></h6>
          <h6><a href="https://github.com/themsaid/ergodnc-nextjs" target="_blank">simple project</a></h6>
          <h6><a href="https://github.com/taylorotwell/next-example-frontend" target="_blank">complete project</a></h6>
          <h6><a href="https://codesandbox.io/s/auth-simple-project-with-localstorage-934sd4" target="_blank">with localStorage</a></h6>
     
      </ul>`
        },
        {
          modalTitle: "cmd commend",
          id: "next-cmd-commend",
          modalBody: `<ul style="height:initial">
          <h6>run project</h6>
        <li>npm run dev</li>
        <h6>build project</h6>
        <li>npm run build</li>
        <h6>run project after build</h6>
        <li>npm run start</li>
      </ul>`
        }
      ]
    },
    {
      title: "vue",
      icon: "fab fa-vuejs",
      list: [
        { title: "Example", link: "https://vuejsexamples.com/" },
        {
          title: "vuetify",
          link: "https://vuetifyjs.com/en/getting-started/installation/"
        },
        {
          modalTitle: "VS commend",
          id: "vs-vue",
          modalBody: `<ul style="height:initial">
        <li><strong> install cli first time</strong> npm install -g @vue/cli </li>
        <li><strong>creat </strong> vue create my-project </li>
        <li><strong>run </strong> npm run serve </li>
        <li><strong>install vue-router </strong> npm install vue-router@4</li>
      </ul>`
        }
      ]
    },
    {
      title: "open project ",
      icon: "fas fa-laptop-code",
      list: [
        {
          modalTitle: "open github in codesandbox",
          id: "codesandbox",
          modalBody: ` <ul>
        <li>
     <strong>form : </strong> https://github.com/etc.
        </li>
        <li>
          <strong>to : </strong>  https://github<span class="text-danger">box</span>.com/etc
        </li>
      </ul>`
        },
        {
          modalTitle: "open project in vscode web",
          id: "codesandbox2",
          modalBody: ` <ul>
          <li>
          <strong>form : </strong> https://github.com/etc.
             </li>
             <li>
               <strong>to : </strong>  https://<span class="text-danger">vscode.dev/</span>github.com/etc
             </li>
          </ul>`
        },
        {
          modalTitle: "open project in stackblitz ",
          id: "stackblitz",
          modalBody: ` <ul>
          <li>
          <strong>form : </strong> https://github.com/etc.
             </li>
             <li>
               <strong>to : </strong>  https://<span class="text-danger">stackblitz.com/github</span>/etc
             </li>
          </ul>`
        }
      ]
    },
    {
      title: "css",
      icon: "fab fa-css3-alt",
      list: [
        {
          title: "generate",
          list: [
            { title: "waves", link: "https://getwaves.io/" },
            { title: "clip-path", link: "https://bennettfeely.com/clippy/" }
          ]
        },
        {
          title: "generate animation",
          list: [
            { title: "all", link: "https://animista.net" },
            { title: "text", link: "http://cssanimation.io/index.html" }
          ]
        },
        {
          title: "gui generator css",
          list: [
            { title: "proprties", link: "https://cssgenerator.org" },
            { title: "studio", link: "https://enjoycss.com/" }
          ]
        },
        { title: "sprite images", link: "https://css.spritegen.com" },
        {
          title: "border-radius",
          link: "https://9elements.github.io/fancy-border-radius/"
        },
        { title: "css-layout", link: "https://csslayout.io/" },
        { title: "div-table", link: "https://divtable.com/generator/" },

        {
          title: "css effect glass",
          link: "https://css.glass/"
        },
        {
          title: "generate transform 3d",
          list: [
            {
              title: "cube",
              link: "https://www.cssportal.com/css-3d-transform-generator/"
            },
            {
              title: "card",
              link:
                "https://www.html-code-generator.com/css/transform-generator"
            }
          ]
        }
      ]
    },
    {
      title: "template",
      icon: "fab fa-bootstrap",
      list: [
        { title: "bnker", link: "https://bnker.netlify.app/" },
        {
          title: "foodka(from pc)",
          link:
            "https://themeforest.net/item/foodka-restaurant-food-ordering-delivery-html-template/33165530?_ga=2.50825705.1122537538.1641056576-1469307516.1641056576"
        },
        { title: "html", link: "https://colorlib.com" },
        {
          title: "all free and pro",
          link: "https://www.creative-tim.com/"
        },
        {
          title: "dashboard",
          list: [
            {
              title: "soft-ui",
              link:
                "https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard"
            },
            {
              title: "vuexy",
              link:
                "https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/landing/"
            },
            {
              title: "pickbazar",
              link:
                "https://codecanyon.net/item/pickbazar-laravel-react-next-rest-graphql-ecommerce/31475730"
            }
          ]
        },
        {
          title: "vuexy",
          link:
            "https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/html/rtl/vertical-menu-template/index.html"
        }
      ]
    },
    {
      title: "classes",
      icon: "fa fa-question-circle",
      list: [
        {
          title: "fontawesome",
          list: [
            {
              title: "5",
              link:
                "https://www.fontawesomecheatsheet.com/font-awesome-cheatsheet-5x/"
            },
            {
              title: "4.7",
              link:
                "https://www.fontawesomecheatsheet.com/font-awesome-cheatsheet-4x/"
            }
          ]
        },
        {
          title: "bootstrap",
          list: [
            {
              title: "4",
              link:
                "https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp"
            },
            {
              title: "3",
              link:
                "https://www.w3schools.com/bootstrap/bootstrap_ref_all_classes.asp"
            },
            {
              title: "5",
              link: "https://bootstrap-cheatsheet.themeselection.com/index.html"
            }
          ]
        }
      ]
    },
    {
      title: "svg",
      icon: "fas fa-shapes",
      list: [
        { title: "png to svg", link: "https://www.pngtosvg.com/" },
        {
          title: "svg person",
          list: [
            { title: "search", link: "https://freewebillustrations.com" },
            { title: "1", link: "https://undraw.co/illustrations" },
            { title: "2", link: "https://www.manypixels.co/gallery" },
            { title: "3", link: "https://delesign.com/free-designs/graphics/" }
          ]
        },
        {
          title: "svg animate line draw",
          link: "https://svgartista.net/?referrer=animista"
        },
        { title: "svg animation", link: "https://lottiefiles.com" },
        { title: "svg app", link: "https://vectr.com/new" }
      ]
    },
    {
      title: "icons",
      icon: "fas fa-icons",
      list: [
        { title: "EPS AI", link: "https://www.graphberry.com/category/icons" },
        { title: "SVG PNG", link: "https://www.graphberry.com/category/icons" },
        { title: "SVG", link: "https://www.svgrepo.com/" },
        {
          title: "SVG EPS PNG PSD",
          list: [
            { title: "1", link: "https://www.flaticon.com/" },
            { title: "2", link: "https://graphicburger.com/icons-set/" }
          ]
        },
        { title: "PNG", link: "https://www.iconfinder.com/" },
        { title: "unicode-table", link: "https://unicode-table.com/en/" },
        { title: "emojipedia", link: "https://emojipedia.org/" },
        { title: "gradient", link: "https://www.iconshock.com/svg-icons/#_=_" }
      ]
    },
    {
      title: "last",
      icon: "fas fa-walking",
      list: [
        { title: "favicon", link: "https://realfavicongenerator.net/" },
        { title: "image compressor", link: "https://imagecompressor.com/" },
        { title: "best compressor", link: "https://www.compress2go.com/" },
        { title: "svg compressor", link: "https://vecta.io/nano" },
        { title: "validator", link: "https://validator.w3.org/" },
        { title: "free host", link: "https://www.netlify.com/" },
        {
          title: "tester screen remember reload page",
          link: "https://responsivedesignchecker.com"
        },
        { title: "browser tester ", link: "https://www.browserstack.com/" },
        { title: "tester screens", link: "https://everysize-app.kibalabs.com" },
        { title: "readme generator", link: "https://stackedit.io/app" },
        {
          modalTitle: "img sizes",
          id: "img-sizes",
          modalBody: `<ul>
          <li>1024*512</li>
          <li>800*1200</li>
          <li>1200*630</li>
          <li>180*110</li>
          <li>736*1128</li>
          <li><a href="https://github.com/alaa-sufi/MyPortfolio/blob/main/index.html">git hub link</a></li>
          </ul>`
        },
        {
          modalTitle: "Combiner js",
          id: "combiner-js",
          modalBody: `<ul>
          <li><strong class="text-success">install</strong> npm install uglify-js -g</li>
          <li>uglifyjs 1.js 2.js  3.js 4.js -o  output.min.js  --source-map </li>
          <p>it will compress and compine js files with source map</p>
          </ul>`
        },
        {
          modalTitle: "Combiner css",
          id: "combiner-css",
          modalBody: `<ul>
          <li><strong class="text-success">install</strong> npm install uglifycss -g</li>
          <li>uglifycss 1.css 2.css  3.css 4.css --output  output.min.css </li>
          <p>it will compress and compine css files</p>
          </ul>`
        }
      ]
    },
    {
      title: "mockup",
      icon: "fas fa-laptop",
      list: [
        {
          title: "from link",
          link: "http://techsini.com/multi-mockup/index.php"
        },
        {
          title: "from img",
          list: [
            {
              title: "1",
              link: "https://mockupbro.com/mockup/flat-devices-mockup"
            },
            { title: "2", link: "https://mockuper.net/mockups/display" },
            { title: "from psd", link: "https://mockupbro.com/" }
          ]
        }
      ]
    },
    {
      title: "img",
      icon: "fas fa-file-image",
      list: [
        {
          title: "edit",
          list: [
            { title: "photopea", link: "https://www.photopea.com" },
            { title: " canva", link: "https://www.canva.com/" }
          ]
        },
        { title: "fix Ai", link: "https://letsenhance.io/" },
        { title: "remove bg", link: "https://www.remove.bg/" }
      ]
    },
    {
      title: "library",
      icon: "fas fa-file-import",
      list: [
        {
          title: " flickity , groupCells :100%",
          link: "https://flickity.metafizzy.co/"
        },
        { title: "wowjs", link: "https://wowjs.uk/" },
        { title: "nicescroll", link: "https://nicescroll.areaaperta.com/" },
        { title: "shuffle", link: "https://www.kunkalabs.com/mixitup/" },
        { title: "fit text", link: "http://fittextjs.com/" },
        { title: "flagpedia", link: "https://flagpedia.net/download/api" },
        {
          title: "multiselect with search",
          list: [
            { title: "web", link: "https://select2.org/" },
            {
              title: "codepen",
              link: "https://codepen.io/alaa-sufi/pen/xxrKJmm"
            }
          ]
        },
        {
          title: "js & CSS Libraries",
          link: "https://www.cssscript.com/tag/time-picker/"
        },
        { title: "darkmode", link: "https://darkmodejs" },
        {
          title: "file-upload-with-preview",
          link: "https://github.com/johndatserakis/file-upload-with-preview"
        },
        {
          title: "datepicker",
          link: "http://www.daterangepicker.com/"
        },
        {
          title: "datatables",
          link: "https://datatables.net/"
        }
      ]
    },
    {
      title: "colors",
      icon: "fa fa-palette",
      list: [
        { title: "palettes", link: "https://colorhunt.co" },
        {
          title: "circle wheel",
          link: "https://color.adobe.com/create/color-wheel"
        },
        { title: "explore", link: "https://color.adobe.com/explore" },
        {
          title: "contrast checker",
          link: "https://coolors.co/contrast-checker/112a46-acc8e5"
        },
        { title: "gradient", link: "https://cssgradient.io/" },
        { title: "shadow", link: "https://shadows.brumm.af/" },
        {
          title: "from img",
          list: [
            { title: "coolers", link: "https://coolors.co/image-picker" },
            { title: "adobe", link: "https://color.adobe.com/create/image" }
          ]
        }
      ]
    },
    {
      title: "reference",
      icon: "fa fa-asterisk",
      list: [
        { title: "html", link: "https://htmlreference.io/" },
        { title: "css", link: "https://cssreference.io/" },
        { title: "roadmap", link: "https://roadmap.sh/frontend" },
        { title: "cheatsheet all", link: "https://htmlcheatsheet.com/" },
        {
          title: "grid",
          link: "https://alialaa.github.io/css-grid-cheat-sheet/"
        },
        { title: "flex", link: "https://codepen.io/enxaneta/pen/adLPwv/" },
        { title: "api", link: "https://github.com/public-apis/public-apis" }
      ]
    },
    {
      title: "varios",
      icon: "fas fa-brain",
      list: [
        { title: "convert img2txt", link: "https://ocr.space/" },
        { title: "regexp", link: "https://ihateregex.io/" },
        { title: "blog for all", link: "https://bashooka.com" },
        { title: "blog react", link: "https://pagepro.co/" },
        {
          title: "img placeholder",
          list: [
            { title: "solid", link: "http://placehold.jp/en.html" },
            { title: "real", link: "https://placeimg.com/" }
          ]
        },
        { title: "temp mail", link: "https://temp-mail.org/ar/" },
        { title: "temp sms", link: "https://receive-smss.com/" },
        { title: "download apps", link: "https://filecr.com/" },
        { title: "generate faker data", link: "https://www.mockaroo.com/" },
        {
          title: "json translate",
          link: "https://file-translate.com/en/app/json-translate"
        }
      ]
    },
    {
      title: "theme",
      icon: "fab fa-wordpress",
      list: [{ title: "wocommerce hiteck", link: "" }]
    },
    {
      title: "php",
      icon: "fab fa-php",
      list: [
        {
          modalTitle: "VS commend",
          id: "vs-php",
          modalBody: `<h5>from folder</h5>
          <ul style="height:initial" class="mb-3">
          <li>php artisan config:clear</li>
          <li> php artisan cache:clear </li>
          <li>Php artisan mi:f --seed</li>
          <li>php artisan serve</li>
          </ul>
          <h5>from gitlab</h5>
          <ul style="height:initial" class="mb-3">
          <h6>copy .env.example to .env</h6>
          <h6>install vender:</h6>
          <li>composer install</li>
          <h6 class="text-danger">install vender if has error:</h6>
          <li>composer install --ignore-platform-reqs</li>
          <li>php artisan key:generate</li>
          <li>php artisan config:clear</li>          
          <li> php artisan cache:clear </li>
          <li>Php artisan mi:f --seed</li>
          <li>php artisan serve</li>
          <h6 class="text-success">for show all routes in project</h6>
          <li>php artisan route:list</li>
        </ul>`
        }
      ]
    },
    {
      title: "learn",
      icon: "fas fa-graduation-cap",
      list: [
        { title: "daily css", link: "https://100dayscss.com/" },
        { title: "css battle", link: "https://cssbattle.dev/" },
        { title: "coderhub", link: "https://coderhub.sa/home" },
        { title: "javascript30", link: "https://javascript30.com/" },
        { title: "elzero website", link: "https://elzero.org/" }
      ]
    },
    {
      title: "seo",
      icon: "fas fa-sitemap",
      list: [
        {
          title: "seo component",
          link: "https://www.jimraptis.com/blog/seo-component-for-next-js-react"
        },
        {
          title: "sitemap",
          link: "https://blog.mostaql.com/everything-about-sitemap/#archives"
        },
        {
          title: "chrome extension",
          link: "https://blog.khamsat.com/chrome-extensions-for-seo/"
        },
        {
          title: "google analitics ",
          link: "https://analytics.google.com/analytics/web/"
        },
        { title: "google search console ", link: "search.google.com" },
        { title: "google tag manager", link: "https://tagmanager.google.com/" },
        { title: "page speed insights", link: "https://pagespeed.web.dev/" },
        { title: "web Measure", link: "https://web.dev/measure/" },
        { title: "tester seo", link: "https://www.seobility.net/en/seocheck/" },
        { title: "head meta", link: "https://www.heymeta.com" }
      ]
    }
  ]);

  return (
    <div className="content">
      <h1>Useful frontEnd Websites</h1>
      <div className="container">
        <div className="row">
          {links.map((link, index) => (
            <div className="col-lg-4 col-md-6 group" key={index}>
              <ul>
                <h2>
                  {link.title} <i className={link.icon}></i>
                </h2>
                {link.list &&
                  link.list.map((li, i) => (
                    <>
                      <li key={i} className={i > "4" && "d-none"}>
                        {li.title && (
                          <>
                            <a target="_blank" rel="noreferrer" href={li.link}>
                              {li.title}
                            </a>
                            {li.list &&
                              li.list.map((l, ii) => (
                                <span className="item" key={ii}>
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={l.link}
                                  >
                                    {l.title}
                                  </a>
                                </span>
                              ))}
                          </>
                          //   }
                        )}
                        {li.modalTitle && (
                          <>
                            <button
                              type="button"
                              className="btn"
                              data-toggle="modal"
                              data-target={`#${li.id}`}
                            >
                              {" "}
                              {li.modalTitle}{" "}
                            </button>
                            <div
                              className="modal fade"
                              id={li.id}
                              tabIndex={-1}
                              aria-labelledby="vs"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                  <div
                                    className="modal-body"
                                    dangerouslySetInnerHTML={{
                                      __html: li.modalBody
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </li>
                      {i == link.list.length - 1 && i > 5 && (
                        <>
                          <button
                            className="more"
                            onClick={(event) => {
                              showMore(event);
                            }}
                          >
                            show more
                          </button>
                          <button
                            className="less d-none"
                            onClick={(event) => {
                              showLess(event);
                            }}
                          >
                            show less
                          </button>
                        </>
                      )}
                    </>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <footer class="text-center py-2">
        <div className="container">
          <div>
            Made With <i class="fas fa-heart text-danger"></i> By{" "}
            <a
              href="https://alaa-sufi-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
              class="text-underline"
            >
              Alaa Sufi
            </a>{" "}
            ©<script>document.write(new Date().getFullYear())</script>2023.
          </div>
        </div>
      </footer>
    </div>
  );
}
