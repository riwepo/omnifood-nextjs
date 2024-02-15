import HeadingSecondary from "../ui/heading-secondary";
import Subheading from "../ui/subheading";
import AllRecipesLink from "./all-recipes-link";
import MealList from "./meal-list";

function Meals() {
  return (
    <section id="meals" className="section-meals bg-white px-0 py-24">
      <div className="container m-auto max-w-[75rem] px-8 py-0 text-center">
        <Subheading>Meals</Subheading>
        <HeadingSecondary>
          Omnifood AI chooses from 5,000+ recipes
        </HeadingSecondary>
      </div>

      <MealList />
      <AllRecipesLink />
    </section>
  );
}

// .container {
//   /* 1140px */
//   max-width: 120rem;
//   padding: 0 3.2rem;
//   margin: 0 auto;
// }

// .all-recipes {
//   text-align: center;
//   font-size: 1.8rem;
// }

// .link:link,
// .link:visited {
//   display: inline-block;
//   color: #e67e22;
//   text-decoration: none;
//   border-bottom: 1px solid currentColor;
//   padding-bottom: 2px;
//   transition: all 0.3s;
// }

// .link:hover,
// .link:active {
//   color: #cf711f;
//   border-bottom: 1px solid transparent;
// }

export default Meals;
