const items = document.querySelectorAll('.card,.person,.process-line>div');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [{opacity:0, transform:'translateY(18px)'},{opacity:1, transform:'translateY(0)'}],
        {duration:650, easing:'cubic-bezier(.2,.7,.2,1)', fill:'forwards'}
      );
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
items.forEach(el => observer.observe(el));
