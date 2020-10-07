<template>
  <div>
    <Loader />
    <Menu />
    <section class="has-divider">
      <div class="container">
        <div class="row align-items-center justify-content-between o-hidden">
          <div class="col-md-6 order-sm-2 mb-5 mb-sm-0" data-aos="fade-left">
            <img src="~assets/img/saas-3.svg" alt="Image">
          </div>
          <div class="col-md-6 pr-xl-5 order-sm-1">
            <h1 class="display-4">
              Build it with Leap
            </h1>
            <p class="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <form class="d-sm-flex mb-2 mt-4">
              <input
                type="email"
                class="form-control form-control-lg mr-sm-2 mb-2 mb-sm-0"
                placeholder="you@yoursite.com"
              >
              <button class="btn btn-lg btn-primary" type="submit">
                Get Started
              </button>
            </form>
            <span
              class="text-small text-muted"
            >Already using Leap? <a href="#">Sign In</a>
            </span>
          </div>
        </div>
      </div>
      <div class="divider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="96px"
          viewBox="0 0 100 100"
          version="1.1"
          preserveAspectRatio="none"
          class="injected-svg bg-primary-alt"
          data-src="~assets/img/dividers/divider-1.svg"
        >
          <path
            d="M0,0 C40,33 66,52 75,52 C83,52 92,33 100,0 L100,100 L0,100 L0,0 Z"
          />
        </svg>
      </div>
    </section>
    <section class="bg-primary-alt">
      <div class="container">
        <div class="row mb-4">
          <div class="col">
            <h2 class="h1">
              Multiple layouts for your SaaS
            </h2>
          </div>
        </div>
        <div class="row">
          <Card
            :title="'Communication'"
            :image="'~assets/img/icons/theme/communication/chat-check.svg'"
            :description="
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
            "
          />
          <Card
            :title="'Payments'"
            :image="'~assets/img/icons/theme/shopping/wallet-3.svg'"
            :description="
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
            "
          />
          <Card
            :title="'Sushi'"
            :image="'~assets/img/icons/theme/food/sushi.svg'"
            :description="
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
            "
          />
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row justify-content-center text-center mb-6">
          <div class="col-xl-8 col-lg-9">
            <h2 class="display-4 mx-xl-6">
              Build it from the ground up.
            </h2>
            <p class="lead">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
            </p>
          </div>
        </div>
        <div class="row justify-content-center mb-5">
          <div class="col-xl-11">
            <ul class="nav justify-content-center" role="tablist">
              <li class="nav-item mx-1">
                <a
                  class="nav-link active"
                  href="#saas-tab-1"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="saas-tab-1"
                  aria-selected="true"
                >
                  <div class="icon-round icon-round-sm bg-primary">
                    <img
                      class="icon bg-primary"
                      src="~assets/img/icons/theme/shopping/box-2.svg"
                      alt="box-2 icon"
                      data-inject-svg
                    >
                  </div>
                  Custom Dashboard
                </a>
              </li>
              <li class="nav-item mx-1">
                <a
                  class="nav-link"
                  href="#saas-tab-2"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="saas-tab-2"
                  aria-selected="false"
                >
                  <div class="icon-round icon-round-sm bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      class="injected-svg icon bg-primary"
                      data-src="assets/img/icons/theme/shopping/chart-pie.svg"
                    >
                      <title>Icon For Chart-pie</title>
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <rect opacity="0" x="0" y="0" width="24" height="24" />
                        <path
                          d="M4.00246329,12.2004927 L13,14 L13,4.06189375 C16.9463116,4.55399184 20,7.92038235 20,12 C20,16.418278 16.418278,20 12,20 C7.64874861,20 4.10886412,16.5261253 4.00246329,12.2004927 Z"
                          fill="#000000"
                          opacity="0.3"
                        />
                        <path
                          d="M3.0603968,10.0120794 C3.54712466,6.05992157 6.91622084,3 11,3 L11,11.6 L3.0603968,10.0120794 Z"
                          fill="#000000"
                        />
                      </g>
                    </svg>
                  </div>
                  Smart Analytics
                </a>
              </li>
              <li class="nav-item mx-1">
                <a
                  class="nav-link"
                  href="#saas-tab-3"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="saas-tab-3"
                  aria-selected="false"
                >
                  <div class="icon-round icon-round-sm bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      class="injected-svg icon bg-primary"
                      data-src="assets/img/icons/theme/design/saturation.svg"
                    >
                      <title>Icon For Saturation</title>
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <rect opacity="0" x="0" y="0" width="24" height="24" />
                        <path
                          d="M7,14 C7,16.7614237 9.23857625,19 12,19 C14.7614237,19 17,16.7614237 17,14 C17,12.3742163 15.3702913,9.86852817 12,6.69922982 C8.62970872,9.86852817 7,12.3742163 7,14 Z M12,21 C8.13400675,21 5,17.8659932 5,14 C5,11.4226712 7.33333333,8.08933783 12,4 C16.6666667,8.08933783 19,11.4226712 19,14 C19,17.8659932 15.8659932,21 12,21 Z"
                          fill="#000000"
                          fill-rule="nonzero"
                        />
                        <path
                          d="M12,4 C16.6666667,8.08933783 19,11.4226712 19,14 C19,17.8659932 15.8659932,21 12,21 L12,4 Z"
                          fill="#000000"
                        />
                      </g>
                    </svg>
                  </div>
                  Dark Mode
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-11" data-aos="fade-up">
            <div class="tab-content">
              <div
                id="saas-tab-1"
                class="tab-pane fade show active"
                role="tabpanel"
                aria-labelledby="saas-tab-1"
              >
                <div class="popover-image">
                  <div
                    class="popover-hotspot bg-primary-2"
                    style="top: 25%; left: 10%;"
                    data-toggle="popover"
                    title="Hotspot title"
                    data-content="And here's some amazing content. It's very engaging. Right?"
                  />
                  <div
                    class="popover-hotspot bg-primary-2"
                    style="top: 10%; left: 90%;"
                    data-toggle="popover"
                    title="Hotspot title"
                    data-content="And here's some amazing content. It's very engaging. Right?"
                  />
                  <div
                    class="popover-hotspot bg-primary-2"
                    style="top: 90%; left: 20%;"
                    data-toggle="popover"
                    title="Hotspot title"
                    data-content="And here's some more amazing content. It's very engaging. Right?"
                  />
                  <img
                    src="~assets/img/saas-1.jpg"
                    alt="Image"
                    class="rounded border shadow-lg"
                  >
                </div>
              </div>
              <div
                id="saas-tab-2"
                class="tab-pane fade"
                role="tabpanel"
                aria-labelledby="saas-tab-2"
              >
                <div class="popover-image">
                  <div
                    class="popover-hotspot bg-primary-2"
                    style="top: 25%; left: 90%;"
                    data-toggle="popover"
                    title="Hotspot title"
                    data-content="And here's some amazing content. It's very engaging. Right?"
                  />
                  <div
                    class="popover-hotspot bg-primary-2"
                    style="top: 90%; left: 10%;"
                    data-toggle="popover"
                    title="Hotspot title"
                    data-content="And here's some amazing content. It's very engaging. Right?"
                  />
                  <div
                    class="popover-hotspot bg-primary-2"
                    style="top: 30%; left: 60%;"
                    data-toggle="popover"
                    title="Hotspot title"
                    data-content="And here's some more amazing content. It's very engaging. Right?"
                  />
                  <img
                    src="~assets/img/saas-2.jpg"
                    alt="Image"
                    class="rounded border shadow-lg"
                  >
                </div>
              </div>
              <div
                id="saas-tab-3"
                class="tab-pane fade"
                role="tabpanel"
                aria-labelledby="saas-tab-3"
              >
                <div class="popover-image">
                  <div
                    class="popover-hotspot bg-primary-2"
                    style="top: 2%; left: 2%;"
                    data-toggle="popover"
                    title="Hotspot title"
                    data-content="And here's some amazing content. It's very engaging. Right?"
                  />
                  <div
                    class="popover-hotspot bg-primary-2"
                    style="top: 35%; left: 95%;"
                    data-toggle="popover"
                    title="Hotspot title"
                    data-content="And here's some amazing content. It's very engaging. Right?"
                  />
                  <div
                    class="popover-hotspot bg-primary-2"
                    style="top: 90%; left: 50%;"
                    data-toggle="popover"
                    title="Hotspot title"
                    data-content="And here's some more amazing content. It's very engaging. Right?"
                  />
                  <img
                    src="~assets/img/saas-3.jpg"
                    alt="Image"
                    class="rounded border shadow-lg"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-primary-alt">
      <div class="container">
        <div class="row justify-content-between">
          <div
            class="col-xl-5 col-lg-6 aos-init aos-animate"
            data-aos="fade-right"
          >
            <div class="row justify-content-center">
              <div class="col-md-8 col-lg mb-4 mb-lg-0">
                <img src="~assets/img/saas-2.svg" alt="Image">
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="h1">
              Fits into your workflow
            </h3>
            <p class="lead">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <div class="row mt-5 o-hidden">
              <div
                class="col-sm-6 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <a
                  href="#"
                  class="card card-sm card-body flex-row align-items-center hover-shadow-3d"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    class="injected-svg"
                    data-src="assets/img/logos/product/invision.svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M43.6487 0H4.35131C1.94813 0 0 1.94813 0 4.35131V43.6487C0 46.0519 1.94813 48 4.35131 48H43.6487C46.0519 48 48 46.0519 48 43.6487V4.35131C48 1.94813 46.0519 0 43.6487 0Z"
                      fill="#DC395F"
                    />
                    <path
                      d="M16.0416 15.1022C17.6372 15.1022 18.9739 13.8516 18.9739 12.2124C18.9739 10.5744 17.6372 9.32401 16.0416 9.32401C14.446 9.32401 13.1096 10.5744 13.1096 12.2124C13.1096 13.8514 14.446 15.1022 16.0416 15.1022ZM9.96171 30.5747C9.7894 31.3078 9.70296 32.0994 9.70296 32.7452C9.70296 35.2898 11.0828 36.9789 14.0151 36.9789C16.447 36.9789 18.4185 35.5348 19.8381 33.2029L18.9713 36.6816H23.8003L26.5603 25.6118C27.2503 22.809 28.587 21.3542 30.6139 21.3542C32.2093 21.3542 33.201 22.3464 33.201 23.9844C33.201 24.459 33.1579 24.9759 32.9854 25.5368L31.5623 30.6249C31.3466 31.3581 31.2608 32.0916 31.2608 32.781C31.2608 35.1966 32.6833 36.9634 35.6588 36.9634C38.203 36.9634 40.2295 35.3256 41.3507 31.4014L39.4536 30.669C38.5048 33.2979 37.6855 33.7733 37.0386 33.7733C36.3917 33.7733 36.0467 33.3424 36.0467 32.4804C36.0467 32.0923 36.1333 31.6616 36.2623 31.143L37.6425 26.1859C37.9873 25.0219 38.1169 23.9897 38.1169 23.0413C38.1169 19.3329 35.8744 17.3976 33.1579 17.3976C30.6139 17.3976 28.0264 19.6924 26.733 22.1076L27.6814 17.7726H20.3081L19.2731 21.5908H22.723L20.5986 30.0958C18.9304 33.8042 15.8661 33.8644 15.4815 33.7783C14.85 33.6358 14.4461 33.396 14.4461 32.5755C14.4461 32.1021 14.5324 31.422 14.748 30.6021L17.9824 17.7726H9.78939L8.75439 21.5908H12.1607L9.96189 30.5747"
                      fill="white"
                    />
                  </svg>
                  <div class="ml-3">
                    <h5 class="mb-0">Invision</h5>
                    <span>Creative Tools</span>
                  </div>
                </a>
              </div>
              <div
                class="col-sm-6 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <a
                  href="#"
                  class="card card-sm card-body flex-row align-items-center hover-shadow-3d"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    class="injected-svg"
                    data-src="assets/img/logos/product/dropbox.svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M12 4L0 11.723L12 19.3324L24 11.723L12 4ZM36 4L24 11.723L36 19.3324L48 11.723L36 4ZM0 27.0554L12 34.7784L24 27.0554L12 19.3324L0 27.0554ZM36 19.3324L24 27.0554L36 34.7784L48 27.0554L36 19.3324ZM12 37.277L24 45L36 37.277L24 29.6676L12 37.277Z"
                      fill="#0069FB"
                    />
                  </svg>
                  <div class="ml-3">
                    <h5 class="mb-0">Dropbox</h5>
                    <span>Productivity</span>
                  </div>
                </a>
              </div>
              <div
                class="col-sm-6 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <a
                  href="#"
                  class="card card-sm card-body flex-row align-items-center hover-shadow-3d"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    class="injected-svg"
                    data-src="assets/img/logos/product/slack.svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M30.2369 5.58619C29.5985 3.62093 27.4877 2.5455 25.5227 3.18423C23.5575 3.82263 22.482 5.93346 23.1208 7.89839L32.7948 37.6628C33.4591 39.4988 35.4423 40.5304 37.346 39.9826C39.3318 39.411 40.5421 37.3019 39.9085 35.3518L30.2369 5.58619Z"
                      fill="#DFA22F"
                    />
                    <path
                      d="M15.2471 10.4567C14.6083 8.49165 12.4977 7.41621 10.5327 8.05462C8.56729 8.69318 7.49168 10.8038 8.13058 12.7691L17.8048 42.5337C18.4689 44.3695 20.4523 45.4013 22.356 44.853C24.3416 44.2817 25.5519 42.1727 24.9183 40.2222L15.2471 10.4567Z"
                      fill="#3CB187"
                    />
                    <path
                      d="M42.4139 30.2372C44.3792 29.5988 45.4543 27.4883 44.8159 25.5229C44.1775 23.5579 42.0666 22.4823 40.1017 23.1209L10.3372 32.7952C8.50124 33.4592 7.46962 35.4424 8.01743 37.3461C8.58904 39.3317 10.6981 40.5422 12.6482 39.9086L42.4139 30.2374"
                      fill="#CE1E5B"
                    />
                    <path
                      d="M16.5407 38.6439L23.6546 36.3325L21.3429 29.2179L14.2285 31.5302L16.5407 38.644"
                      fill="#392538"
                    />
                    <path
                      d="M31.5306 33.7732C34.2201 32.8996 36.7199 32.0873 38.6446 31.4618L36.3326 24.3459L29.2183 26.6582L31.5306 33.7732Z"
                      fill="#BB242A"
                    />
                    <path
                      d="M37.5434 15.2472C39.5084 14.6088 40.5839 12.4982 39.9455 10.5328C39.3071 8.56782 37.1963 7.49239 35.231 8.13079L5.4663 17.8053C3.63052 18.469 2.59873 20.4523 3.14704 22.356C3.71832 24.3414 5.82735 25.5519 7.77784 24.9183L37.5434 15.2471"
                      fill="#72C5CD"
                    />
                    <path
                      d="M11.6688 23.6543C13.6062 23.0247 16.104 22.213 18.7838 21.3426C17.9102 18.6527 17.0979 16.153 16.4724 14.2279L9.35645 16.5406L11.6688 23.6543Z"
                      fill="#248C73"
                    />
                    <path
                      d="M26.6586 18.7839L33.7739 16.4718C33.0032 14.0998 32.2325 11.7278 31.4617 9.35587L24.3462 11.6686L26.6586 18.7839Z"
                      fill="#62803A"
                    />
                  </svg>
                  <div class="ml-3">
                    <h5 class="mb-0">Slack</h5>
                    <span>Communication</span>
                  </div>
                </a>
              </div>
              <div
                class="col-sm-6 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <a
                  href="#"
                  class="card card-sm card-body flex-row align-items-center hover-shadow-3d"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    class="injected-svg"
                    data-src="assets/img/logos/product/trello.svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M43.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V43.3125C0 45.9013 2.09867 48 4.6875 48H43.3125C45.9013 48 48 45.9013 48 43.3125V4.6875C48 2.09867 45.9013 0 43.3125 0Z"
                      fill="#0091E6"
                    />
                    <path
                      d="M39.51 6.24002H29.37C28.1274 6.24002 27.12 7.24738 27.12 8.49002V24.99C27.12 26.2327 28.1274 27.24 29.37 27.24H39.51C40.7526 27.24 41.76 26.2327 41.76 24.99V8.49002C41.76 7.24738 40.7526 6.24002 39.51 6.24002Z"
                      fill="white"
                    />
                    <path
                      d="M18.63 6.24002H8.48999C7.24735 6.24002 6.23999 7.24738 6.23999 8.49002V36.99C6.23999 38.2327 7.24735 39.24 8.48999 39.24H18.63C19.8726 39.24 20.88 38.2327 20.88 36.99V8.49002C20.88 7.24738 19.8726 6.24002 18.63 6.24002Z"
                      fill="white"
                    />
                  </svg>
                  <div class="ml-3">
                    <h5 class="mb-0">Trello</h5>
                    <span>Productivity</span>
                  </div>
                </a>
              </div>
            </div>
            <a href="#" class="hover-arrow">View all Integrations</a>
          </div>
        </div>
      </div>
    </section>
    <section class="has-divider bg-primary-alt">
      <div class="container pt-5">
        <div class="row justify-content-between align-items-center o-hidden">
          <div class="col-md-6 col-lg-5">
            <ListItem :title="'1. Purchase a license'" description="Voluptatem accusantium doloremque laudantium, totam rem aperiam." />
            <ListItem :title="'2. Build stunning sites'" description="Voluptatem accusantium doloremque laudantium, totam rem aperiam." />
            <ListItem :title="'3. Deploy and make money'" description="Voluptatem accusantium doloremque laudantium, totam rem aperiam." />
          </div>
          <div class="col-md-6" data-aos="fade-left">
            <img src="~assets/img/saas-4.svg" alt="Image">
          </div>
        </div>
      </div>
      <div class="divider">
        <img
          src="~assets/img/dividers/divider-2.svg"
          alt="graphical divider"
          data-inject-svg
        >
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row justify-content-center text-center mb-6">
          <div class="col-xl-8 col-lg-9">
            <h2 class="display-4 mx-xl-6">
              How we stack up
            </h2>
            <p class="lead">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
            </p>
          </div>
        </div>
        <div class="row justify-content-center">
          <PriceTable />
        </div>
        <div class="row justify-content-center mt-6">
            <Slider />
        </div>
      </div>
    </section>
    <section class="p-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-7 col-md-8 mb-lg-n7 layer-2">
            <img src="~assets/img/saas-1.svg" alt="Image" data-aos="fade-up" class="aos-init aos-animate">
          </div>
        </div>
      </div>
    </section>
    <section class="bg-primary text-light has-divider">
      <div class="divider flip-y">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="96px" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" class="injected-svg" data-src="assets/img/dividers/divider-3.svg">
            <path d="M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100"></path>
        </svg>
      </div>
      <div class="container">
        <div class="row justify-content-center mb-0 mb-md-3">
          <div class="col-xl-6 col-lg-8 col-md-10 text-center">
            <h3 class="h1">Power your team with Leap</h3>
          </div>
        </div>
        <div class="row justify-content-center text-center">
          <div class="col-xl-6 col-lg-7 col-md-9">
            <form class="d-md-flex mb-3 justify-content-center">
              <input type="email" class="mx-1 mb-2 mb-md-0 form-control form-control-lg" placeholder="Email Address">
              <button class="mx-1 btn btn-primary-3 btn-lg" type="submit">Get Started</button>
            </form>
            <div class="text-small text-muted mx-xl-6">
              Add some helper text here to explain the fine print details of your product or service.
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Menu from '@/components/Menu/Menu.vue'
import Loader from '@/components/Loader/Loader.vue'
import Card from '@/components/Card/Card.vue'
import ListItem from '@/components/ListItem/ListItem.vue'
import PriceTable from '@/components/PriceTable/PriceTable.vue'
import Slider from '@/components/Slider/Slider.vue'
import Footer from '@/components/Footer/Footer.vue'
@Component({
  components: {
    Menu,
    Card,
    Loader,
    ListItem,
    PriceTable,
    Slider,
    Footer
  }
})
export default class Home extends Vue {
  mounted () {
    if (process.browser) {
      window.addEventListener('load', function () {
        document.body.classList.add('loaded')
      })
    }
  }
}
</script>
