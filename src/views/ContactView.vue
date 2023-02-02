<template>
  <footer
    class="flex flex-col px-3 pb-8 mx-auto mt-2 max-w-7xl font-Roboto text-chd lg:flex-row lg:gap-5 lg:pt-8"
  >
    <!-- left side  -->
    <div
      class="relative flex justify-center w-full px-3 py-3 lg:w-1/2 lg:items-center"
    >
      <div
        class="z-1 absolute flex h-[350px] items-center justify-center text-2xl font-bold"
      >
        {{ $t('loading.load') }}
      </div>
      <iframe
        class="z-2 relative h-[350px] w-[100%] rounded-xl lg:h-[600px] border border-chd p-2"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.487401805385!2d108.03944325096906!3d12.681579091002693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31721d78ce94ec83%3A0x8790a6c9fdb3c8d4!2sCHD%20Travel!5e0!3m2!1sen!2s!4v1673843484284!5m2!1sen!2s"
        loading="lazy"
      ></iframe>
    </div>
    <!-- right side  -->
    <div class="px-3 lg:w-1/2">
      <div class="mb-5 text-center">
        <h1 class="text-2xl font-bold">{{ $t('contactView.contact') }}</h1>
        <span>{{ $t('contactView.intro') }}</span>
      </div>
      <section class="flex flex-col gap-3 [&>div>h1]:font-bold">
        <div>
          <h1>CHD Travel</h1>
          <p>{{ $t('contactView.address') }}</p>
          <p>{{ $t('contactView.city') }}</p>
          <p>{{ $t('contactView.province') }}</p>
        </div>

        <div class="[&>div>h1]:font-bold [&>div]:gap-1">
          <div class="flex">
            <h1>{{ $t('contactView.phone') }}</h1>
            <p>{{ $t('contactView.phone_no') }}</p>
          </div>
          <div class="flex">
            <h1>{{ $t('contactView.hotline') }}</h1>
            <p>{{ $t('contactView.hotline_no') }}</p>
          </div>
          <div class="flex">
            <h1>Email:</h1>
            <p>info@chdtravel.com</p>
          </div>
        </div>

        <p>{{ $t('contactView.reservation') }}</p>

        <div class="flex flex-col gap-3 [&>div>h1]:font-bold">
          <h1>{{ $t('contactView.we_speak') }}</h1>
          <div>
            <h1>{{ $t('contactView.english') }}</h1>
            <p>Mr. Duc Le - 0913.471.352</p>
            <p>Mr. Ha Tran - 0971.864.864</p>
          </div>

          <div>
            <h1>{{ $t('contactView.french') }}</h1>
            <p>Mr. Do Hoang - 0971.864.864</p>
          </div>
          <div>
            <h1>{{ $t('contactView.viet') }}</h1>
            <p>Mr. Duc Le - 0913.471.352</p>
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup></script>
