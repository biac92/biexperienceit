  const testimonialContainer = document.querySelector('.testimonial-container');
  const testimonials = document.querySelectorAll('.testimonial');

  let counter = 1;

  setInterval(() => {
    const size = testimonials[0].clientWidth;
    testimonialContainer.style.transform = `translateX(${-size * counter}px)`;

    counter++;

    if (counter === testimonials.length) {
      counter = 0;
    }
  }, 3000);
