<template>
  <div
    class="justify-center container w-full flex lg:flex-row sm:flex-col align-middle mt-10"
  >
    <img
      class="h-80 container sm:ml-10 w-80 mt-10 rounded-full flex hover:border-emerald-500 transition-all duration-300 blur-sm hover:blur-none border-4 mb-6 sm:mb-0"
      src="../assets/images/mypic.png"
      alt=""
    />

    <div class="flex mt-10 flex-col sm:flex-1 items-start sm:ml-10">
      <div class="flex">
        <span
          class="text-9xl cursor-pointer hover:animate-blob font-bold mb-2 sm:text-5xl md:text-6xl lg:text-7xl"
          >👋</span
        >
        <h1
          class="mb-2 sm:text-xl text-blue-500 hover:text-4xl hover:animate-pulse md:text-2xl cursor-pointer text-xl font-medium"
        >
          <span class="text-blue-700">
            <span class="text-blue-700 text-7xl font-extrabold">H</span
            >ello</span
          >
          <span class="text-green-500 ml-3">I</span>
          <span class="text-yellow-500 ml-3">AM 🙋</span>
        </h1>
      </div>
      <transition name="animate" appear>
        <p
          class="text-3xl cursor-pointer font-semibold mb-2 sm:text-4xl md:text-5xl hover:animate-blob lg:text-6xl name"
        >
          <span class="text-blue-700">Ismail </span>
          <span class="text-green-500"> Alfasika </span>
          <span class="text-yellow-500"> Abdul Hamid </span>
        </p>
      </transition>
      <transition name="animate" appear>
        <p
          class="mb-2 sm:text-xl text-blue-500 hover:text-4xl hover:animate-pulse md:text-2xl cursor-pointer text-xl font-medium"
        >
          Frontend & UI Developer
        </p>
      </transition>
      <div appear>
        <p
          class="review mb-2 sm:text-xl md:text-2xl lg:text-3xl hover:text-xl cursor-pointer hover:animate-blob review"
        >
          <!-- Frontend development is more than just a skill, it's a way of life for
          me. I'm passionate about crafting user-friendly web applications that
          solve real problems.

          <br />
          Embrace the art of creation, the thrill of problem-solving,I implement
          user interface design and solve user problems using web
          technologies.<br />
          With over 2 years of experience, I leverage my expertise in
          technologies like React.js, Vue.js, and Firebase to deliver impactful
          results. I'm constantly learning and staying up-to-date with the
          latest advancements in the field. -->
          I'm passionate about frontend development, it's more than just a skill
          for me - it's a way to combine creativity with problem-solving. For
          over 2 years, I've leveraged my skills in React.js (state management),
          Vue.js, and Firebase to build user-friendly web applications that
          solve real problems. I'm constantly learning and staying up-to-date
          with the latest advancements to deliver impactful results.
        </p>
      </div>

      <div class="mt-6 flex">
        <DownloadCV></DownloadCV>
        <div
          class="flex align-middle mt-12 mx-5 py-2 px-2 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse"
        >
          <a
            href="#"
            class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fill-rule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Facebook page</span>
          </a>
          <a
            href="#"
            class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 21 16"
            >
              <path
                d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
              />
            </svg>
            <span class="sr-only">Discord community</span>
          </a>
          <a
            href="#"
            class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 17"
            >
              <path
                fill-rule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Twitter page</span>
          </a>
          <a
            href="#"
            class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">GitHub account</span>
          </a>
          <a
            href="#"
            class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Dribbble account</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <section
    id="about"
    class="text-gray-100 mt-8 flex justify-center align-middle flex-col body-font border-t bg-slate-700 border-gray-200"
  >
    <div class="container px-5 py-10 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
        >
          About Me 🙋
        </h1>

        <p>
          I'm passionate about frontend development, it's more than just a skill
          for me - it's a way to combine creativity with problem-solving. For
          over 2 years, I've leveraged my skills in React.js (state management),
          Vue.js, and Firebase to build user-friendly web applications that
          solve real problems. I'm constantly learning and staying up-to-date
          with the latest advancements to deliver impactful results.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-blue-900 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 class="text-gray-900 text-lg title-font font-medium">
                Web Design
              </h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, laudantium?.
              </p>
              <a class="mt-3 text-green-500 inline-flex items-center"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-green-500 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 class="text-gray-900 text-lg title-font font-medium">
                Web Development
              </h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officiis, veniam.
              </p>
              <a class="mt-3 text-blue-500 inline-flex items-center"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-yellow-500 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 class="text-gray-900 text-lg title-font font-medium">SEO</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, laborum!
              </p>
              <a class="mt-3 text-green-500 inline-flex items-center"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-white border-t border-gray-200 container dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Company
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="#" class="hover:underline">About</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Careers</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Brand Center</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Help center
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="#" class="hover:underline">Discord Server</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Twitter</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Facebook</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Legal
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="#" class="hover:underline">Privacy Policy</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Licensing</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Download
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="#" class="hover:underline">iOS</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Android</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Windows</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">MacOS</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import axios from "axios";
import DownloadCV from "../components/DownloadCV.vue";

export default {
  components: {
    DownloadCV,
  },
  data() {
    return {
      show: false,
      quotes: [],
    };
  },
  async created() {
    await this.fetchQuotes();
  },
  mounted() {
    window.addEventListener("scroll", this.transitionBackground);
  },
  destroyed() {
    window.removeEventListener("scroll", this.transitionBackground);
  },
};
</script>

<style scoped>
body {
  font-family: "Roboto", "Helvetica", sans-serif;
}
.MainPage {
  margin: 0px;
  gap: 0px;
}
nav {
  display: flex;
}
.logo {
  flex: 2;
  display: flex;
}
.anchor {
  font-size: 22px;
}
.anchor router-link {
  color: rgba(250, 250, 252, 1);
  font-family: Inter;
}
.anchor router-link-exact-active {
  color: green;
  border: 2px solid grey;
  background: #df2828;
}
button {
  color: rgb(2, 2, 3);
  background: rgb(63, 210, 210);
  width: 157px;
  font-size: 15px;
  height: 41px;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  border: 2px solid white;
}
.button :hover {
  color: green;
}
.info {
  justify-content: center;
  align-content: center;
  line-height: normal;
}

h1 {
  color: rgba(250, 250, 252, 1);
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
}
.name {
  color: #fff;
  font-family: Sen;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.field {
  color: rgba(65, 212, 212, 1);
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
}
.review {
  color: #fff;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.codeMotivation {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 50px 100px;
}
.motivation1 {
  height: 400px;
  width: 400px;
  border: 3px solid gray;
  border-radius: 20px;
}
.motivation2 {
  height: 400px;
  width: 400px;
  padding: 27px;
  border: 3px solid gray;
  border-radius: 20px;
}
.motivation3 {
  height: 400px;
  padding: 27px;
  width: 400px;
  border: 3px solid gray;
  border-radius: 20px;
}
/* .animate-enter-from,
.animate-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
.animate-enter-active,
.animate-leave-active {
  div: all 5s ease-in-out;
} */
</style>
