<template>
  <div class="justify-center items-center">
    <div class="mt-10 ml-16 justify-center items-center">
      <div class="header justify-center items-center">
        <h1
          class="text-3xl font-extrabold justify-center items-center flex flex-col"
        >
          Contact Us
        </h1>
        <p class="text-lg justify-center items-center flex flex-col">
          If you have any questions or inquiries, please feel free to contact us
          using the form below:
        </p>
      </div>
      <div>
        <div class="justify-center sm:flex-col lg:flex-row items-center flex">
          <div class="flex">
            <form
              action="submit_form.php"
              class="flex px-8 py-4 mt-4 container rounded shadow-lg border-2 flex-col"
              method="post"
            >
              <!-- Replace "submit_form.php" with the actual file or endpoint that handles form submissions -->
              <label for="name " class="mt-4">firstname & lastname:</label>
              <input
                type="text"
                id="name"
                placeholder="i.e. richmoneyking"
                class="pl-12 py-4 rounded"
                name="name"
                required
              />
              <label for="name " class="mt-4">Email:</label>
              <input
                type="text"
                id="name"
                class="px-12 py-4 rounded"
                placeholder="i.e. richmoneyking@gmail.com"
                name="name"
                required
              />
              <label for="name " class="mt-4">Subject:</label>
              <input
                type="text"
                placeholder="i.e.need help"
                id="name"
                class="px-12 py-4 rounded"
                name="name"
                required
              />
              <label for="name " class="mt-4">Message:</label>
              <input
                type="text"
                placeholder="i.e. type message "
                id="name"
                class="px-12 py-8 rounded"
                name="name"
                required
              />
              <a
                href="#"
                type="submit"
                class="mt-4 px-28 hover:bg-blue-600 py-4 text-xl text-white align-middle justify-center border-2 rounded"
                >Submit</a
              >
            </form>
          </div>
          <div class="flex-col flex ml-48">
            <div>
              <h1 class="text-2xl justify-center items-center flex flex-col">
                Contact Us
              </h1>
              <p class="text-xl justify-center items-center flex flex-col">
                If you haveorm below:
              </p>
            </div>
            <div class="mt-20">
              <h1 class="text-2xl justify-center items-center flex flex-col">
                Contact Us
              </h1>
              <p class="text-xl justify-center items-center flex flex-col">
                If you haveorm below:
              </p>
            </div>
            <div class="mt-20">
              <h1 class="text-2xl justify-center items-center flex flex-col">
                Contact Us
              </h1>
              <p class="text-xl justify-center items-center flex flex-col">
                If you haveorm below:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
