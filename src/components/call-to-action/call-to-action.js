import HeadingSecondary from "../ui/heading-secondary";

function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="section-cta bg-white px-0 pb-32 pt-12"
    >
      <div className="container m-auto max-w-[75rem] px-8 py-0 text-center">
        <div className="cta from-burnt-orange-400 grid grid-cols-[2fr_1fr] rounded-xl bg-gradient-to-br to-burnt-orange-100 shadow-xl shadow-black/25">
          <div className="cta-text-box text-burnt-orange-300 pb-16 pl-16 pr-16 pt-12">
            <HeadingSecondary extraClasses="text-inherit mb-8">
              Get your first meal for free!
            </HeadingSecondary>
            <p className="cta-text mb-16 text-xl leading-[1.8]">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            {/* <form className="cta-form" name="sign-up" netlify> */}
            <form
              className="cta-form grid grid-cols-2 gap-x-8 gap-y-6"
              name="sign-up"
            >
              <div>
                <label
                  className="mb-3 block text-base font-medium"
                  htmlFor="full-name"
                >
                  Full Name
                </label>

                <input
                  className="text-inherit w-full rounded-lg border-none bg-whites-100 p-3 text-lg shadow-black/10"
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  name="full-name"
                  required
                />
              </div>

              <div>
                <label
                  className="mb-3 block text-base font-medium"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  className="text-inherit w-full rounded-lg border-none bg-whites-100 p-3 text-lg shadow-black/10"
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  name="email"
                  required
                />
              </div>

              <div>
                <label
                  className="mb-3 block text-base font-medium"
                  htmlFor="select-where"
                >
                  Where did you hear from us?
                </label>
                <select
                  id="select-where"
                  name="select-where"
                  className="text-inherit w-full rounded-lg border-none bg-whites-100 p-3 text-lg shadow-black/10"
                  required
                >
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <button className="btn btn--form">Sign up now</button>

              {/* <input type="checkbox" />
              <input type="number" /> */}
            </form>
          </div>
          <div
            className="cta-img-box"
            role="img"
            aria-label="Woman enjoying food"
          ></div>
        </div>
      </div>
    </section>
  );
}

// .section-cta {
//   /* top / right / bottom / left */
//   /* padding: 9.6rem 0 12.8rem 0; */

//   /* top / horizontal / left */
//   padding: 4.8rem 0 12.8rem;
// }

// .container {
//   /* 1140px */
//   max-width: 120rem;
//   padding: 0 3.2rem;
//   margin: 0 auto;
// }

// .cta {
//   display: grid;
//   /* 2/3 = 66.6% + 1/3 = 33.3% */
//   grid-template-columns: 2fr 1fr;
//   /* background-color: #e67e22; */
//   box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
//   border-radius: 11px;

//   background-image: linear-gradient(to right bottom, #eb984e, #e67e22);
//   overflow: hidden;
// }

// .cta-text-box {
//   padding: 4.8rem 6.4rem 6.4rem 6.4rem;
//   color: #45260a;
// }

// .cta .heading-secondary {
//   /* color: #45260a; */
//   color: inherit;
//   margin-bottom: 3.2rem;
// }

// .cta-text {
//   font-size: 1.8rem;
//   line-height: 1.8;
//   margin-bottom: 4.8rem;
// }

// .cta-img-box {
//   background-image: linear-gradient(
//       to right bottom,
//       rgba(235, 151, 78, 0.35),
//       rgba(230, 125, 34, 0.35)
//     ),
//     url("../img/eating.jpg");
//   background-size: cover;
//   background-position: center;
// }

// .cta-form {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   column-gap: 3.2rem;
//   row-gap: 2.4rem;
// }

// .cta-form label {
//   display: block;
//   font-size: 1.6rem;
//   font-weight: 500;
//   margin-bottom: 1.2rem;
// }

// .cta-form input,
// .cta-form select {
//   width: 100%;
//   padding: 1.2rem;
//   font-size: 1.8rem;
//   font-family: inherit;
//   color: inherit;
//   border: none;
//   background-color: #fdf2e9;
//   border-radius: 9px;
//   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
// }

// .cta-form input::placeholder {
//   color: #aaa;
// }

// .cta *:focus {
//   outline: none;
//   box-shadow: 0 0 0 0.8rem rgba(253, 242, 233, 0.5);
// }

export default CallToAction;
