আপনার নিজের ছবি এখানে রাখুন:
- profile.jpg  -> Hero section এর ছবি (বড়টা)
- about.jpg    -> About Me section এর ছবি

তারপর index.html ফাইলে গিয়ে যেখানে "photo-placeholder" div আছে
(দুই জায়গায় আছে - Hero আর About section এ),
তার ঠিক নিচে যে <img> লাইনটা comment (<!-- ... -->) করা আছে,
সেটা uncomment করে ব্যবহার করুন। যেমন:

  <div class="photo-placeholder">YA</div>
  <!-- <img src="images/profile.jpg" alt="Md Yasin Arafat"> -->

এটাকে বদলে করুন:

  <img src="images/profile.jpg" alt="Md Yasin Arafat">

(উপরের placeholder div টা মুছে ফেলুন বা কমেন্ট করে দিন)

logo.png ফাইলটা নিজে থেকেই ব্যবহার হচ্ছে (navbar আর footer এ) — এটা বদলানোর দরকার নেই।
