// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { a as e, r as t } from "./rolldown-runtime-B0Z9INg1.js";
import { n, t as r } from "./jsx-runtime-Ciaf_P-h.js";
import { t as i } from "./link-CKv6YT18.js";
import { t as a } from "./useNavigate-0DeSS6Ji.js";
import { t as o } from "./useRouteContext-BB1W4XMH.js";
import { t as s } from "./utils-WkhMP9hs.js";
import { t as c } from "./seo-CEr-E37r.js";
import { a as l, r as u } from "./comparisons-Bvgw9jnW.js";
import { n as d } from "./index-C2FRa1ig.js";
import { n as f, r as p } from "./dates-CXgAlU_g.js";
import { a as m, c as h, i as g, n as _, o as v, r as y, t as b } from "./table-B2gZYvbu.js";
import { t as x } from "./hash-scroll-DjxExjN6.js";
import { t as S } from "./headings-DvAJehmF.js";
import { r as C } from "./site-footer-BfDpTxpY.js";
import { t as w } from "./site-header-D9kcq_4U.js";
import { t as T } from "./rival-marks-D5KXjrQ7.js";
var E = e(n(), 1),
  D = E.createContext({});
function O(e) {
  let t = E.useContext(D);
  return E.useMemo(function () {
    return typeof e == `function` ? e(t) : {
      ...t,
      ...e
    };
  }, [t, e]);
}
var k = t({
    default: () => M
  }),
  A = e(r());
function j(e) {
  let t = {
    code: `code`,
    em: `em`,
    h2: `h2`,
    h3: `h3`,
    p: `p`,
    table: `table`,
    tbody: `tbody`,
    td: `td`,
    th: `th`,
    thead: `thead`,
    tr: `tr`,
    ...O(),
    ...e.components
  };
  return (0, A.jsxs)(A.Fragment, {
    children: [(0, A.jsx)(t.p, {
      children: `Most teams are building two products at once without quite admitting it. There's the page that convinces someone to sign up, and there's the software they use after they do. Different people write them, on different schedules, and they almost never want the same component library.`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Magic UI Pro and Kobra each picked a side. Magic UI Pro is 9+ templates and 50+ landing page sections built with Next.js, TypeScript, Tailwind CSS, shadcn/ui and Motion. That's the surface that converts. Kobra is 100+ application components built on Base UI and installed through the shadcn registry, which is the surface people use once they've converted.`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Of the four comparisons on this site, this is the one where "use both" is most often just correct. Here's where the line falls.`
    }), `
`, (0, A.jsx)(t.h2, {
      children: `How Kobra and Magic UI Pro compare`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `What each one is for`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {
            children: `Concern`
          }), (0, A.jsx)(t.th, {
            children: `Kobra`
          }), (0, A.jsx)(t.th, {
            children: `Magic UI Pro`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Unit`
          }), (0, A.jsx)(t.td, {
            children: `Application components`
          }), (0, A.jsx)(t.td, {
            children: `Landing page sections and full templates`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Count`
          }), (0, A.jsx)(t.td, {
            children: `100+ components, 10 free`
          }), (0, A.jsx)(t.td, {
            children: `50+ sections, 9+ templates`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Examples`
          }), (0, A.jsx)(t.td, {
            children: `Combobox, command menu, sidebar, toast, data table`
          }), (0, A.jsx)(t.td, {
            children: `Hero, bento grid, testimonials, pricing, social proof`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Where it ships`
          }), (0, A.jsx)(t.td, {
            children: `Behind the login`
          }), (0, A.jsx)(t.td, {
            children: `In front of it`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Edited by`
          }), (0, A.jsx)(t.td, {
            children: `Engineers, continuously`
          }), (0, A.jsx)(t.td, {
            children: `Marketing and founders, in bursts`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Built on`
          }), (0, A.jsx)(t.td, {
            children: `Base UI, Tailwind v4, React 19, Motion`
          }), (0, A.jsx)(t.td, {
            children: `Next.js, TypeScript, Tailwind, shadcn/ui, Motion`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.p, {
      children: `The catalogs barely touch. Magic UI Pro has no data table, no combobox, no command menu. Kobra has no hero section, no testimonial wall, no bento grid. So choosing between them on features mostly comes down to which half of the product you're working on this week.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Animation, and what it's for`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Both libraries take motion seriously, which is what makes the difference in how they use it worth looking at.`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {
            children: `Concern`
          }), (0, A.jsx)(t.th, {
            children: `Kobra`
          }), (0, A.jsx)(t.th, {
            children: `Magic UI Pro`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Purpose of motion`
          }), (0, A.jsx)(t.td, {
            children: `Feedback: say what the interface just did`
          }), (0, A.jsx)(t.td, {
            children: `Attention: make the page memorable`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Typical effect`
          }), (0, A.jsx)(t.td, {
            children: `A toast that swipes, a button that flips into a spinner`
          }), (0, A.jsx)(t.td, {
            children: `Animated beams, marquees, shimmering text, particles`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Frequency seen`
          }), (0, A.jsx)(t.td, {
            children: `Hundreds of times a day by the same user`
          }), (0, A.jsx)(t.td, {
            children: `Once or twice by each visitor`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Reduced motion`
          }), (0, A.jsx)(t.td, {
            children: `Respected per component`
          }), (0, A.jsx)(t.td, {
            children: `Motion is the point of several sections`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.p, {
      children: `There's an old rule here that applies to animating anything. An effect somebody meets once can afford to be spectacular. An effect they trigger two hundred times a day has to be nearly invisible. Magic UI Pro's animations are built for the first case and Kobra's for the second, and neither would survive being swapped.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `How you install it`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {
            children: `Concern`
          }), (0, A.jsx)(t.th, {
            children: `Kobra`
          }), (0, A.jsx)(t.th, {
            children: `Magic UI Pro`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Install`
          }), (0, A.jsx)(t.td, {
            children: (0, A.jsx)(t.code, {
              children: `npx shadcn@latest add @kobra/toast`
            })
          }), (0, A.jsx)(t.td, {
            children: `Copy the section, or start from a template`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Dependency resolution`
          }), (0, A.jsx)(t.td, {
            children: `Automatic through the registry`
          }), (0, A.jsx)(t.td, {
            children: `Manual`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Updates`
          }), (0, A.jsx)(t.td, {
            children: `Re-run the add command`
          }), (0, A.jsx)(t.td, {
            children: `Copy again and diff`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Starting point`
          }), (0, A.jsx)(t.td, {
            children: `An existing codebase`
          }), (0, A.jsx)(t.td, {
            children: `Often a new one, from a template`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.h2, {
      children: `Where Kobra goes deeper`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `The components an application is made of`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Forms with validation states. Comboboxes with multi-select and typeahead. Command menus with submenu navigation, sidebars that resize and remember, toasts that stack and swipe, OTP inputs, resizable panels, data tables. This is the unglamorous half of a product and it's where users spend all of their time. Magic UI Pro doesn't cover it.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Accessibility as a foundation`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Kobra's interactive components sit on Base UI, which handles focus traps, roving tabindex, typeahead, collision detection and screen reader semantics. That foundation matters more on an application surface than on a landing page. People navigate a dashboard by keyboard, and a focus trap that fails there is a modal you can't escape. A landing page is mostly headings and images.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Buying one component`
    }), `
`, (0, A.jsx)(t.p, {
      children: `$19 for a single component, and ten purchases are credited in full toward the library. Magic UI Pro sells individual templates at $49 and the full library at $199.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `A Figma kit for the design side`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Kobra publishes a Figma library of 52 primitives on the same tokens as the code, free on the Figma Community. Magic UI Pro's product is the code and the templates. If somebody on your team designs before you build, that's a step Kobra covers and it costs nothing to try.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Prompts for the agent editing your code`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Every component ships a prompt describing its API and behavior, installed into the repo alongside the source. An AI editor working on your codebase reads the component's own documentation instead of guessing.`
    }), `
`, (0, A.jsx)(t.h2, {
      children: `Where Magic UI Pro goes deeper`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Complete, deployable templates`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Nine-plus full landing pages: SaaS, AI agent, dev tool, mobile app, startup, portfolio, changelog, blog. Each one is a working Next.js project rather than a set of parts. Kobra ships no templates, and if you need a site online this week that settles it.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `The sections that actually convert`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Hero sections, social proof, bento grids, feature showcases, testimonial walls, pricing tables, CTAs. These are the components of a marketing page. They have the most direct effect on revenue of anything either library sells, and Kobra has none of them.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Distinctive visual effects`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Animated beams, marquees, shimmer, particle fields, orbiting circles. Being memorable is the job on a landing page, and Magic UI Pro's effects are built to be looked at. Kobra's motion is deliberately the opposite.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `A lower price for a whole site`
    }), `
`, (0, A.jsx)(t.p, {
      children: `$49 buys one complete template. Getting a comparable page out of a component library means assembling it yourself.`
    }), `
`, (0, A.jsx)(t.h2, {
      children: `What they cost`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Both are one-time purchases with lifetime updates. Neither charges a subscription.`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {}), (0, A.jsx)(t.th, {
            children: `Kobra`
          }), (0, A.jsx)(t.th, {
            children: `Magic UI Pro`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Individual`
          }), (0, A.jsx)(t.td, {
            children: `$199 one-time, 1 seat`
          }), (0, A.jsx)(t.td, {
            children: `$199 one-time, individual license`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Team`
          }), (0, A.jsx)(t.td, {
            children: `$150 per seat, from 2 seats, no cap`
          }), (0, A.jsx)(t.td, {
            children: `Individual license is the listed option`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Smallest unit`
          }), (0, A.jsx)(t.td, {
            children: `$19 for one component`
          }), (0, A.jsx)(t.td, {
            children: `$49 for one template`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Free`
          }), (0, A.jsx)(t.td, {
            children: `10 components with full source, plus the whole Figma kit`
          }), (0, A.jsx)(t.td, {
            children: `Several templates listed as free downloads`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Commercial use`
          }), (0, A.jsx)(t.td, {
            children: `Included`
          }), (0, A.jsx)(t.td, {
            children: `Included`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Reselling`
          }), (0, A.jsx)(t.td, {
            children: `Not permitted`
          }), (0, A.jsx)(t.td, {
            children: `Not permitted`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Updates`
          }), (0, A.jsx)(t.td, {
            children: `Lifetime`
          }), (0, A.jsx)(t.td, {
            children: `Lifetime`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.p, {
      children: `At the individual level the headline number is identical. $199, once, forever, either way. That's unusually clean, and it means price shouldn't decide this. What you're building should.`
    }), `
`, (0, A.jsx)(t.p, {
      children: (0, A.jsx)(t.em, {
        children: `Prices read from the vendor's own pricing page on 7 September 2026.`
      })
    }), `
`, (0, A.jsx)(t.h2, {
      children: `Should you use both?`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Yes, and more clearly here than anywhere else on this site. The catalogs don't overlap, both deliver plain Tailwind source into your own repository, and neither adds a runtime dependency or a provider to reconcile. The usual arrangement is Magic UI Pro for the marketing site and Kobra for the application, sharing one set of Tailwind design tokens so the two halves look like one product.`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Two things to watch. Both bring their own Button, so pick one and delete the other rather than shipping two. And keep the animation philosophies where they belong. An animated beam behind a settings form is as wrong as a silent, motionless hero.`
    }), `
`, (0, A.jsx)(t.h2, {
      children: `When to choose Kobra or Magic UI Pro`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {
            children: `If your project looks like…`
          }), (0, A.jsx)(t.th, {
            children: `Choose`
          }), (0, A.jsx)(t.th, {
            children: `Why`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `A dashboard, editor, or anything behind a login`
          }), (0, A.jsx)(t.td, {
            children: `Kobra`
          }), (0, A.jsx)(t.td, {
            children: `100+ application components; Magic UI Pro covers none of this`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `A landing page for a product you already built`
          }), (0, A.jsx)(t.td, {
            children: `Magic UI Pro`
          }), (0, A.jsx)(t.td, {
            children: `50+ sections and 9+ templates aimed exactly here`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `A complete marketing site, live this week`
          }), (0, A.jsx)(t.td, {
            children: `Magic UI Pro`
          }), (0, A.jsx)(t.td, {
            children: `Deployable Next.js templates, $49 each`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Forms, tables, menus and overlays that must be accessible`
          }), (0, A.jsx)(t.td, {
            children: `Kobra`
          }), (0, A.jsx)(t.td, {
            children: `Base UI underneath every interactive component`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `One component to fix one gap`
          }), (0, A.jsx)(t.td, {
            children: `Kobra`
          }), (0, A.jsx)(t.td, {
            children: `$19, credited toward the full library`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `You want the page to be memorable`
          }), (0, A.jsx)(t.td, {
            children: `Magic UI Pro`
          }), (0, A.jsx)(t.td, {
            children: `Beams, marquees and shimmer, built to be watched`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `You want the app to feel invisible and fast`
          }), (0, A.jsx)(t.td, {
            children: `Kobra`
          }), (0, A.jsx)(t.td, {
            children: `Motion tuned for actions repeated all day`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Building a product end to end`
          }), (0, A.jsx)(t.td, {
            children: `Both`
          }), (0, A.jsx)(t.td, {
            children: `The catalogs don't overlap, and the licenses are one-time`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.p, {
      children: `These two aren't really rivals. They cover opposite halves of the same product, at the same individual price, on the same one-time terms. The only wrong answer is picking one and then trying to make it do the other one's job.`
    })]
  });
}
function M(e = {}) {
  let {
    wrapper: t
  } = {
    ...O(),
    ...e.components
  };
  return t ? (0, A.jsx)(t, {
    ...e,
    children: (0, A.jsx)(j, {
      ...e
    })
  }) : j(e);
}
var N = t({
  default: () => F
});
function P(e) {
  let t = {
    code: `code`,
    em: `em`,
    h2: `h2`,
    h3: `h3`,
    p: `p`,
    strong: `strong`,
    table: `table`,
    tbody: `tbody`,
    td: `td`,
    th: `th`,
    thead: `thead`,
    tr: `tr`,
    ...O(),
    ...e.components
  };
  return (0, A.jsxs)(A.Fragment, {
    children: [(0, A.jsx)(t.p, {
      children: `There are two ways to sell React components. You can go wide, with thousands of blocks, every icon pack and every theme, priced as a subscription that keeps paying for the additions. Or you can go narrow, with a fixed catalog of the components an application is actually made of, sold once.`
    }), `
`, (0, A.jsx)(t.p, {
      children: `shadcn.io and Kobra are those two strategies. shadcn.io offers 6,000+ marketing blocks, 285,000 React icons, 59 themes, 14 templates and an MCP server for AI editors, on plans from $389 to $1,589 a year. Kobra offers 100+ application components built on Base UI, installed through the shadcn registry, for a one-time $199.`
    }), `
`, (0, A.jsx)(t.p, {
      children: `One note before any of that, because it trips people up. Neither of these is the official shadcn/ui. shadcn.io says so on its own homepage, and Kobra isn't affiliated with it either. Kobra publishes to the shadcn registry format, which is an open specification any library can implement. The official shadcn/ui is still free and open source at ui.shadcn.com.`
    }), `
`, (0, A.jsx)(t.h2, {
      children: `How Kobra and shadcn.io compare`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Catalog and coverage`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {
            children: `Concern`
          }), (0, A.jsx)(t.th, {
            children: `Kobra`
          }), (0, A.jsx)(t.th, {
            children: `shadcn.io`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Components`
          }), (0, A.jsx)(t.td, {
            children: `100+ application components, 10 free`
          }), (0, A.jsx)(t.td, {
            children: `Marketing blocks (6,000+), UI components, AI components`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Icons`
          }), (0, A.jsx)(t.td, {
            children: `Uses Tabler; none bundled`
          }), (0, A.jsx)(t.td, {
            children: `285,000+ React icons`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Themes`
          }), (0, A.jsx)(t.td, {
            children: `One system, light and dark`
          }), (0, A.jsx)(t.td, {
            children: `59 themes`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Templates`
          }), (0, A.jsx)(t.td, {
            children: `None`
          }), (0, A.jsx)(t.td, {
            children: `14 premium templates`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Extras`
          }), (0, A.jsx)(t.td, {
            children: `Prompts per component, and a free Figma kit of 52 primitives`
          }), (0, A.jsx)(t.td, {
            children: `React hooks, charts, shaders, animations, DESIGN.md specs`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Focus`
          }), (0, A.jsx)(t.td, {
            children: `The interactive parts of an application`
          }), (0, A.jsx)(t.td, {
            children: `Breadth across marketing, UI and AI surfaces`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.p, {
      children: `shadcn.io is enormously broader, and the count isn't padding. 6,000 blocks across pricing, hero, CTA and feature categories is a real library. Kobra isn't competing on volume and doesn't try to. 100+ components is roughly the surface of an application, and the catalog stops where marketing pages begin.`
    }), `
`, (0, A.jsx)(t.p, {
      children: `What the numbers don't tell you is which kind of breadth you need. A hundred pricing sections help you once, on the day you build the pricing page. One combobox that handles multi-select, typeahead, keyboard navigation and paste helps for as long as the product exists.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `How you install it`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {
            children: `Concern`
          }), (0, A.jsx)(t.th, {
            children: `Kobra`
          }), (0, A.jsx)(t.th, {
            children: `shadcn.io`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Primary install`
          }), (0, A.jsx)(t.td, {
            children: (0, A.jsx)(t.code, {
              children: `npx shadcn@latest add @kobra/toast`
            })
          }), (0, A.jsx)(t.td, {
            children: `Copy from the site, or via MCP in an AI editor`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Registry`
          }), (0, A.jsx)(t.td, {
            children: `Publishes the shadcn registry format`
          }), (0, A.jsx)(t.td, {
            children: `Blocks and components delivered through the site and MCP`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Registry`
          }), (0, A.jsxs)(t.td, {
            children: [(0, A.jsx)(t.code, {
              children: `@kobra`
            }), `, token-gated for paid items`]
          }), (0, A.jsx)(t.td, {
            children: `None`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `AI tooling`
          }), (0, A.jsx)(t.td, {
            children: `A prompt ships with each component`
          }), (0, A.jsx)(t.td, {
            children: `MCP server, tiered by plan; DESIGN.md brand specs`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Where the code lands`
          }), (0, A.jsx)(t.td, {
            children: `Your repo, yours to edit`
          }), (0, A.jsx)(t.td, {
            children: `Your repo, yours to edit`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.p, {
      children: `Both put source in your repository. shadcn.io has invested far more heavily in the AI-assisted path: an MCP server with usage tiered by plan, plus hand-curated DESIGN.md specifications describing the design languages of Stripe, Linear, Apple, GitHub, Figma and others for an agent to work from. If your workflow is mostly prompting, that's a real advantage, and Kobra's single per-component prompt is a smaller idea.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `The foundation underneath`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {
            children: `Concern`
          }), (0, A.jsx)(t.th, {
            children: `Kobra`
          }), (0, A.jsx)(t.th, {
            children: `shadcn.io`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Primitive library`
          }), (0, A.jsx)(t.td, {
            children: `Base UI`
          }), (0, A.jsx)(t.td, {
            children: `shadcn/ui conventions and primitives`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Tailwind`
          }), (0, A.jsx)(t.td, {
            children: `v4`
          }), (0, A.jsx)(t.td, {
            children: `v4 and v3`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `React`
          }), (0, A.jsx)(t.td, {
            children: `19`
          }), (0, A.jsx)(t.td, {
            children: `React`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Motion`
          }), (0, A.jsx)(t.td, {
            children: `Motion, reduced-motion respected per component`
          }), (0, A.jsx)(t.td, {
            children: `Animations and effects included as a category`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.h2, {
      children: `Where Kobra goes deeper`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Interaction states, not just layout`
    }), `
`, (0, A.jsx)(t.p, {
      children: `A marketing block is markup. It renders, and the work is done. An application component is a state machine: open, closed, focused, loading, empty, error, dragging, mid-swipe. Kobra's catalog is built around those states, and the detail is the product. Swipe-to-dismiss toasts that read velocity, an OTP input that animates a paste across its slots, a dropzone that changes its prompt as a file approaches, a copy button that morphs into a check.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `One payment, and it stays paid`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Kobra is $199 once for one seat, forever, and every component added later is included. Nothing renews and nothing expires. At shadcn.io's Individual tier, the same stretch of time costs $389 for the first year and $389 again for the second.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Commercial use at the entry price`
    }), `
`, (0, A.jsxs)(t.p, {
      children: [`This is the sharpest practical difference between them and it's easy to miss on the pricing page. shadcn.io's Individual plan is marked `, (0, A.jsx)(t.strong, {
        children: `personal use`
      }), `, and commercial use starts at the Team plan, $789 a year. Kobra's $199 license includes commercial use for one developer with no upgrade required.`]
    }), `
`, (0, A.jsx)(t.h3, {
      children: `A Figma kit at no cost`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Kobra publishes a Figma library of 52 primitives, with real variables for color, spacing and radius, slots on the container components, and composites assembled from their own parts. It's free on the Figma Community, license or no license.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Buying one component`
    }), `
`, (0, A.jsx)(t.p, {
      children: `$19 buys a single Kobra component outright. Ten purchases are credited in full against the library, so buying incrementally never costs more than committing up front. shadcn.io's smallest unit is a subscription.`
    }), `
`, (0, A.jsx)(t.h2, {
      children: `Where shadcn.io goes deeper`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Sheer volume`
    }), `
`, (0, A.jsx)(t.p, {
      children: `6,000+ blocks, 285,000 icons, 59 themes, 14 templates. If your job this quarter is to ship a lot of different marketing surfaces quickly, this is a bigger library than Kobra by two orders of magnitude, and no amount of interaction polish makes up for not having the section you need already built.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `MCP and AI-native workflows`
    }), `
`, (0, A.jsx)(t.p, {
      children: `An MCP server that plugs straight into AI editors, with usage tiers across the plans, plus the DESIGN.md brand specifications. If your team mostly builds by prompting, this is a whole category of tooling Kobra doesn't currently offer.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Marketing and landing surfaces`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Pricing sections, hero sections, CTAs, feature grids. Kobra has none of these.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Unlimited seats`
    }), `
`, (0, A.jsx)(t.p, {
      children: `The Organization plan covers unlimited seats at $1,589 a year, and every one of those seats goes through the same self-serve checkout. Kobra's seat count isn't capped either, but the picker on the pricing page runs to 25. Past that it's a conversation rather than a button, which is a slower way to buy for an organization that would rather not have one.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `A free tier that never expires`
    }), `
`, (0, A.jsx)(t.p, {
      children: `shadcn.io publishes a free plan. Kobra's free tier is 9 complete components with full source, which is real, but it's a fixed list rather than an ongoing tier.`
    }), `
`, (0, A.jsx)(t.h2, {
      children: `What they cost`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {}), (0, A.jsx)(t.th, {
            children: `Kobra`
          }), (0, A.jsx)(t.th, {
            children: `shadcn.io`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Individual`
          }), (0, A.jsx)(t.td, {
            children: `$199 one-time, commercial use included`
          }), (0, A.jsxs)(t.td, {
            children: [`$389/year, `, (0, A.jsx)(t.strong, {
              children: `personal use only`
            })]
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Small team`
          }), (0, A.jsx)(t.td, {
            children: `$150 per seat, from 2 seats`
          }), (0, A.jsx)(t.td, {
            children: `$789/year for 5 seats, commercial`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Large team`
          }), (0, A.jsx)(t.td, {
            children: `Unlimited seats; above 25 is arranged directly`
          }), (0, A.jsx)(t.td, {
            children: `$1,589/year, unlimited seats`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Smallest unit`
          }), (0, A.jsx)(t.td, {
            children: `$19 for one component`
          }), (0, A.jsx)(t.td, {
            children: `The lowest plan`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Model`
          }), (0, A.jsx)(t.td, {
            children: `One-time, lifetime updates`
          }), (0, A.jsx)(t.td, {
            children: `Subscription; a lifetime option is also offered`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Free`
          }), (0, A.jsx)(t.td, {
            children: `10 components with full source, plus the whole Figma kit`
          }), (0, A.jsx)(t.td, {
            children: `Free plan`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.p, {
      children: `Over three years, one commercial developer pays $199 with Kobra and $2,367 with shadcn.io's Team plan, which is the lowest tier that permits commercial work. That gap is the clearest reason to choose Kobra. The clearest reason not to is that shadcn.io's library is vastly larger and its AI tooling is further along.`
    }), `
`, (0, A.jsx)(t.p, {
      children: (0, A.jsx)(t.em, {
        children: `Prices read from the vendor's own pricing page on 7 September 2026. Subscription pricing changes; check before you buy.`
      })
    }), `
`, (0, A.jsx)(t.h2, {
      children: `Should you use both?`
    }), `
`, (0, A.jsx)(t.p, {
      children: `You can. Both deliver source into your repo and neither installs a runtime. But the overlap is larger than it looks, and paying a subscription for breadth while also paying once for depth is a decision worth making on purpose rather than by accumulation.`
    }), `
`, (0, A.jsx)(t.p, {
      children: `If you already subscribe to shadcn.io and mainly want better application components, buying individual Kobra components at $19 is a cheap way to fill specific gaps without a second full license.`
    }), `
`, (0, A.jsx)(t.h2, {
      children: `When to choose Kobra or shadcn.io`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {
            children: `If your project looks like…`
          }), (0, A.jsx)(t.th, {
            children: `Choose`
          }), (0, A.jsx)(t.th, {
            children: `Why`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `One developer shipping a commercial product`
          }), (0, A.jsx)(t.td, {
            children: `Kobra`
          }), (0, A.jsx)(t.td, {
            children: `$199 once, commercial use included, no renewal`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Many marketing pages, fast`
          }), (0, A.jsx)(t.td, {
            children: `shadcn.io`
          }), (0, A.jsx)(t.td, {
            children: `6,000+ blocks against Kobra's zero`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `An application: dashboards, editors, settings`
          }), (0, A.jsx)(t.td, {
            children: `Kobra`
          }), (0, A.jsx)(t.td, {
            children: `100+ components aimed at exactly that surface`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `A team that builds mostly by prompting`
          }), (0, A.jsx)(t.td, {
            children: `shadcn.io`
          }), (0, A.jsx)(t.td, {
            children: `MCP server and DESIGN.md brand specifications`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `More than 25 developers, bought self-serve`
          }), (0, A.jsx)(t.td, {
            children: `shadcn.io`
          }), (0, A.jsx)(t.td, {
            children: `Unlimited seats straight through checkout; Kobra takes larger teams directly`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `You want to stop paying and keep the code`
          }), (0, A.jsx)(t.td, {
            children: `Kobra`
          }), (0, A.jsx)(t.td, {
            children: `One-time purchase, lifetime updates`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `You need one component, not a library`
          }), (0, A.jsx)(t.td, {
            children: `Kobra`
          }), (0, A.jsx)(t.td, {
            children: `$19 each, credited toward the full license`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Icons and themes at scale`
          }), (0, A.jsx)(t.td, {
            children: `shadcn.io`
          }), (0, A.jsx)(t.td, {
            children: `285k icons and 59 themes`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.p, {
      children: `It comes down to breadth against depth, and renting against owning. shadcn.io wins on catalog size, on AI tooling, and on buying at scale without talking to anyone. Kobra wins on interaction quality, on commercial terms at the entry price, and on the fact that the payment ends.`
    })]
  });
}
function F(e = {}) {
  let {
    wrapper: t
  } = {
    ...O(),
    ...e.components
  };
  return t ? (0, A.jsx)(t, {
    ...e,
    children: (0, A.jsx)(P, {
      ...e
    })
  }) : P(e);
}
var I = t({
  default: () => R
});
function L(e) {
  let t = {
    code: `code`,
    em: `em`,
    h2: `h2`,
    h3: `h3`,
    p: `p`,
    table: `table`,
    tbody: `tbody`,
    td: `td`,
    th: `th`,
    thead: `thead`,
    tr: `tr`,
    ...O(),
    ...e.components
  };
  return (0, A.jsxs)(A.Fragment, {
    children: [(0, A.jsx)(t.p, {
      children: `A design system exists twice. Once in Figma, where it gets designed, reviewed and handed off, and once in the repository, where it actually ships. Most teams feel the gap between those two copies every week: a component that exists in the file but not in the code, a spacing token that drifted, a state nobody drew.`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Both of these products set out to close that gap, and both ship a Figma library to do it. shadcn/ui Pro leads with the file. It's a component kit built on Figma Slots and Variables, 3,000+ blocks, themes, and a plugin that converts frames into shadcn/ui code. Kobra leads with the code, 100+ application components installed through the shadcn registry, and gives its Figma kit away free on the Community with 52 primitives drawn on the same tokens the components use.`
    }), `
`, (0, A.jsx)(t.p, {
      children: `So the question isn't which one has a design file. It's which end of the system you want the polish on, and how much you're willing to pay for the other end.`
    }), `
`, (0, A.jsx)(t.h2, {
      children: `How Kobra and shadcn/ui Pro compare`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `What you are actually buying`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {
            children: `Concern`
          }), (0, A.jsx)(t.th, {
            children: `Kobra`
          }), (0, A.jsx)(t.th, {
            children: `shadcn/ui Pro`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Primary artifact`
          }), (0, A.jsx)(t.td, {
            children: `React source in your repository`
          }), (0, A.jsx)(t.td, {
            children: `A Figma design system`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Figma library`
          }), (0, A.jsx)(t.td, {
            children: `52 primitives, free on the Figma Community`
          }), (0, A.jsx)(t.td, {
            children: `The product itself, in the license`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Code components`
          }), (0, A.jsx)(t.td, {
            children: `100+ application components, 10 free`
          }), (0, A.jsx)(t.td, {
            children: `shadcn/ui, generated from your frames`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Blocks`
          }), (0, A.jsx)(t.td, {
            children: `None`
          }), (0, A.jsx)(t.td, {
            children: `3,000+, in Figma and in code`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Plugin`
          }), (0, A.jsx)(t.td, {
            children: `None`
          }), (0, A.jsx)(t.td, {
            children: `Figma to shadcn/ui, plus variable export and import`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `What the price buys`
          }), (0, A.jsx)(t.td, {
            children: `The code`
          }), (0, A.jsx)(t.td, {
            children: `The file, and the bridge out of it`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.p, {
      children: `The split isn't file versus no file. It's where each product spends its effort. shadcn/ui Pro sells the design half and generates a first draft of the code. Kobra sells the code half and gives the design half away.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `The Figma libraries, side by side`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {
            children: `Concern`
          }), (0, A.jsx)(t.th, {
            children: `Kobra UI Kit`
          }), (0, A.jsx)(t.th, {
            children: `shadcn/ui Pro`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Price`
          }), (0, A.jsx)(t.td, {
            children: `Free on the Figma Community`
          }), (0, A.jsx)(t.td, {
            children: `Included in a $399+ license`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Components`
          }), (0, A.jsx)(t.td, {
            children: `52 primitives, one page each`
          }), (0, A.jsx)(t.td, {
            children: `Complete kit, matching shadcn/ui one to one`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Variables`
          }), (0, A.jsx)(t.td, {
            children: `Color (288), spacing (18), radius (9)`
          }), (0, A.jsx)(t.td, {
            children: `Colors, typography and spacing, multi-brand token sets`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Styles`
          }), (0, A.jsx)(t.td, {
            children: `20 text styles, 6 shadow effects`
          }), (0, A.jsx)(t.td, {
            children: `Full type and effect set`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Structure`
          }), (0, A.jsx)(t.td, {
            children: `Slots on Card, Dialog, Sheet, Drawer and Popover; composites reuse Button, Input, Label, Kbd and Dropdown as exposed instances`
          }), (0, A.jsx)(t.td, {
            children: `Built on Slots and Auto Layout throughout`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Dark mode`
          }), (0, A.jsx)(t.td, {
            children: `Not modeled; the kit is light only`
          }), (0, A.jsx)(t.td, {
            children: `Wired through variables, instant switching`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Prototyping`
          }), (0, A.jsx)(t.td, {
            children: `Not modeled`
          }), (0, A.jsx)(t.td, {
            children: `Interactive variants and flows`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Blocks`
          }), (0, A.jsx)(t.td, {
            children: `None`
          }), (0, A.jsx)(t.td, {
            children: `3,000+`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.p, {
      children: `That table is not flattering and it isn't meant to be. Kobra's kit covers the primitives properly, with real variables, real slots, and composites assembled from their own parts rather than redrawn, and then it stops. shadcn/ui Pro's kit goes a lot further. Dark mode, prototyping, multi-brand token sets and thousands of blocks are all things Kobra's file simply doesn't have.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Design-to-code handoff`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {
            children: `Concern`
          }), (0, A.jsx)(t.th, {
            children: `Kobra`
          }), (0, A.jsx)(t.th, {
            children: `shadcn/ui Pro`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Handoff model`
          }), (0, A.jsx)(t.td, {
            children: `Design in the kit, install the matching component`
          }), (0, A.jsx)(t.td, {
            children: `Figma frames converted to shadcn/ui by plugin`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Token flow`
          }), (0, A.jsx)(t.td, {
            children: `The kit's variables are the Tailwind palette the code uses`
          }), (0, A.jsx)(t.td, {
            children: `Export Figma variables to CSS, or import CSS back`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Code you end up with`
          }), (0, A.jsx)(t.td, {
            children: `The component, installed`
          }), (0, A.jsx)(t.td, {
            children: `Code generated from your frame`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Install path`
          }), (0, A.jsx)(t.td, {
            children: (0, A.jsx)(t.code, {
              children: `npx shadcn@latest add @kobra/toast`
            })
          }), (0, A.jsx)(t.td, {
            children: `Copy a CLI command from inside Figma`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Tailwind support`
          }), (0, A.jsx)(t.td, {
            children: `v4`
          }), (0, A.jsx)(t.td, {
            children: `v4 and v3`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.p, {
      children: `The difference is generation against installation. shadcn/ui Pro turns a frame into code, which is a very good way to get from a picture to a starting point. Kobra's kit and its components are two drawings of one thing, so the handoff is a name rather than a conversion. You design with the Dialog, then you install the Dialog.`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Generated code is a weaker story on the fiftieth screen, where what you want is the same component rather than the fiftieth generation of it. It's a much better story on the first, when the component you need doesn't exist yet.`
    }), `
`, (0, A.jsx)(t.h2, {
      children: `Where Kobra goes deeper`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Behavior that only exists in code`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Focus traps, keyboard navigation, collision-aware popovers, velocity-based gestures, reduced-motion fallbacks. A Figma variant can show you a hover state. It can't show what happens when a toast is swiped at 0.3 pixels per millisecond, or how a combobox behaves when somebody pastes six values into it. That's the half Kobra sells, and no design file contains it.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `The design half costs nothing`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Kobra's Figma kit is on the Community, free, whether or not you ever buy a license. You can put it in front of a designer this afternoon and decide about the code later. shadcn/ui Pro's kit is the license, starting at $399.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `A much lower entry price`
    }), `
`, (0, A.jsx)(t.p, {
      children: `$199 for one commercial seat against $399. The Figma library isn't what separates them, since both have one.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Buying one component`
    }), `
`, (0, A.jsx)(t.p, {
      children: `$19 each, credited in full toward the library after ten. shadcn/ui Pro's smallest unit is the Solo license.`
    }), `
`, (0, A.jsx)(t.h2, {
      children: `Where shadcn/ui Pro goes deeper`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Figma to code`
    }), `
`, (0, A.jsxs)(t.p, {
      children: [`Select a frame, generate shadcn/ui code, export theme variables to `, (0, A.jsx)(t.code, {
        children: `globals.css`
      }), `, import existing CSS variables back into Figma. Kobra has no plugin and no generator. Its kit and its components are matched by hand and by name. For a designer-led team, that loop is shorter with the plugin than without it.`]
    }), `
`, (0, A.jsx)(t.h3, {
      children: `A much larger Figma file`
    }), `
`, (0, A.jsx)(t.p, {
      children: `3,000+ blocks, dashboards and page layouts, dark mode wired through variables, prototyping flows, multi-brand token sets. Kobra's kit is 52 primitives on a palette with no semantic layer and no dark mode. If the design file is where your team's work happens, this isn't a close comparison.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Whole-page composition`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Dashboards, landing pages and complex flows, available in both Figma and code. Kobra ships components and no blocks in either medium.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Seats for a large organization`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Up to 100 users on the Enterprise license, priced and bought in one step. Kobra doesn't cap seats, but its pricing page picker stops at 25 and anything larger is arranged directly.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `A money-back guarantee`
    }), `
`, (0, A.jsx)(t.p, {
      children: `30 days, full refund. Kobra doesn't publish an equivalent.`
    }), `
`, (0, A.jsx)(t.h2, {
      children: `What they cost`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Both are one-time purchases with lifetime updates.`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {}), (0, A.jsx)(t.th, {
            children: `Kobra`
          }), (0, A.jsx)(t.th, {
            children: `shadcn/ui Pro`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Solo`
          }), (0, A.jsx)(t.td, {
            children: `$199 one-time, 1 seat`
          }), (0, A.jsx)(t.td, {
            children: `$399 one-time, 1 user`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Team`
          }), (0, A.jsx)(t.td, {
            children: `$150 per seat, from 2 seats`
          }), (0, A.jsx)(t.td, {
            children: `$999 one-time, 5 users`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Large`
          }), (0, A.jsx)(t.td, {
            children: `Unlimited seats; above 25 is arranged directly`
          }), (0, A.jsx)(t.td, {
            children: `$2,799 one-time, 100 users`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Smallest unit`
          }), (0, A.jsx)(t.td, {
            children: `$19 for one component`
          }), (0, A.jsx)(t.td, {
            children: `The Solo license`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Figma library`
          }), (0, A.jsx)(t.td, {
            children: `Included, and free on the Community`
          }), (0, A.jsx)(t.td, {
            children: `Included; it is the product`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Free`
          }), (0, A.jsx)(t.td, {
            children: `10 components with full source, plus the whole Figma kit`
          }), (0, A.jsx)(t.td, {
            children: `None`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Refunds`
          }), (0, A.jsx)(t.td, {
            children: `Not published`
          }), (0, A.jsx)(t.td, {
            children: `30-day money-back guarantee`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.p, {
      children: (0, A.jsx)(t.em, {
        children: `Prices read from the vendor's own pricing page on 7 September 2026.`
      })
    }), `
`, (0, A.jsx)(t.h2, {
      children: `Should you use both?`
    }), `
`, (0, A.jsx)(t.p, {
      children: `If your design team lives in Figma and wants blocks, dark mode and prototyping in the file, shadcn/ui Pro is the better design library, and it pairs cleanly with Kobra's components. Both speak Tailwind, so one palette can drive the file and the code.`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Start by opening Kobra's kit though, because it costs nothing. If 52 primitives on shared tokens are enough for the way your team designs, then you already have the design half and the only question left is which code library to buy.`
    }), `
`, (0, A.jsx)(t.h2, {
      children: `When to choose Kobra or shadcn/ui Pro`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {
            children: `If your team looks like…`
          }), (0, A.jsx)(t.th, {
            children: `Choose`
          }), (0, A.jsx)(t.th, {
            children: `Why`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Engineers who design in the browser`
          }), (0, A.jsx)(t.td, {
            children: `Kobra`
          }), (0, A.jsx)(t.td, {
            children: `The code is the source of truth, and the kit is there if a designer arrives`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `A design team that works in Figma all day`
          }), (0, A.jsx)(t.td, {
            children: `shadcn/ui Pro`
          }), (0, A.jsx)(t.td, {
            children: `Blocks, dark mode, prototyping and multi-brand tokens in the file`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `A solo developer shipping a product`
          }), (0, A.jsx)(t.td, {
            children: `Kobra`
          }), (0, A.jsx)(t.td, {
            children: `Half the price, and the Figma kit is free either way`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `You want a Figma library without paying for one`
          }), (0, A.jsx)(t.td, {
            children: `Kobra`
          }), (0, A.jsx)(t.td, {
            children: `52 primitives on the Community, no license required`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `You need dashboards and page layouts drawn`
          }), (0, A.jsx)(t.td, {
            children: `shadcn/ui Pro`
          }), (0, A.jsx)(t.td, {
            children: `3,000+ blocks; Kobra has none in Figma or in code`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `You need dark mode in the design file`
          }), (0, A.jsx)(t.td, {
            children: `shadcn/ui Pro`
          }), (0, A.jsx)(t.td, {
            children: `Wired through variables; Kobra's kit is light only`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `You need command menus, multi-selects, OTP inputs`
          }), (0, A.jsx)(t.td, {
            children: `Kobra`
          }), (0, A.jsx)(t.td, {
            children: `Behavior no design file can express`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `You want frames turned into code`
          }), (0, A.jsx)(t.td, {
            children: `shadcn/ui Pro`
          }), (0, A.jsx)(t.td, {
            children: `The plugin is the product's bridge, and Kobra has no equivalent`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `A hundred people need a seat today, without a sales call`
          }), (0, A.jsx)(t.td, {
            children: `shadcn/ui Pro`
          }), (0, A.jsx)(t.td, {
            children: `Priced for 100 users on the page`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Design and engineering both need serving`
          }), (0, A.jsx)(t.td, {
            children: `Both`
          }), (0, A.jsx)(t.td, {
            children: `They invest at opposite ends and share Tailwind tokens`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.p, {
      children: `Both ship a Figma library, so that isn't the question any more. shadcn/ui Pro's file is far richer and costs $399. Kobra's is smaller, covers the primitives properly, and is free. What you're really choosing between is a generator that turns your designs into code, and a set of components already built and tuned to match the file you designed from.`
    })]
  });
}
function R(e = {}) {
  let {
    wrapper: t
  } = {
    ...O(),
    ...e.components
  };
  return t ? (0, A.jsx)(t, {
    ...e,
    children: (0, A.jsx)(L, {
      ...e
    })
  }) : L(e);
}
var z = t({
  default: () => V
});
function B(e) {
  let t = {
    code: `code`,
    em: `em`,
    h2: `h2`,
    h3: `h3`,
    p: `p`,
    table: `table`,
    tbody: `tbody`,
    td: `td`,
    th: `th`,
    thead: `thead`,
    tr: `tr`,
    ...O(),
    ...e.components
  };
  return (0, A.jsxs)(A.Fragment, {
    children: [(0, A.jsx)(t.p, {
      children: `Every React project reaches the same fork. You can assemble your interface out of blocks, which are large pre-composed chunks of markup you paste in and edit down, or out of components, which are small primitives you install once and compose yourself for the rest of the project's life. Both get a page on screen. They leave you somewhere very different six months later.`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Tailwind Plus and Kobra sit on opposite sides of that fork. Tailwind Plus is a library of 500+ UI blocks and 13 site templates from the makers of Tailwind CSS, plus Catalyst, a React UI kit. Kobra is 100+ application components built on Base UI, installed through the shadcn registry into your own repository, where you own the files outright.`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Here's how they compare, and whether you want both.`
    }), `
`, (0, A.jsx)(t.h2, {
      children: `How Kobra and Tailwind Plus compare`
    }), `
`, (0, A.jsx)(t.p, {
      children: `The block-versus-component split shapes what you install, how much of it you keep, and what happens when the design changes.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `What you get`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Both products hand over real source code you keep. What differs is the unit of work.`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {
            children: `Concern`
          }), (0, A.jsx)(t.th, {
            children: `Kobra`
          }), (0, A.jsx)(t.th, {
            children: `Tailwind Plus`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Unit`
          }), (0, A.jsx)(t.td, {
            children: `Components: Combobox, Command Menu, Sidebar, Toast`
          }), (0, A.jsx)(t.td, {
            children: `Blocks: hero sections, pricing tables, product lists`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Count`
          }), (0, A.jsx)(t.td, {
            children: `100+ components, 10 free to try`
          }), (0, A.jsx)(t.td, {
            children: `500+ blocks, 13 templates, Catalyst UI kit`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Coverage`
          }), (0, A.jsx)(t.td, {
            children: `Application UI: forms, overlays, navigation, data`
          }), (0, A.jsx)(t.td, {
            children: `Marketing, Application UI, Ecommerce`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Behavior layer`
          }), (0, A.jsx)(t.td, {
            children: `Base UI primitives, accessibility built in`
          }), (0, A.jsx)(t.td, {
            children: `Headless UI for the interactive blocks, Catalyst for React`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Animation`
          }), (0, A.jsx)(t.td, {
            children: `Motion, with reduced-motion handling per component`
          }), (0, A.jsx)(t.td, {
            children: `Mostly static markup; a few blocks use transitions`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Framework`
          }), (0, A.jsx)(t.td, {
            children: `React 19, Tailwind v4`
          }), (0, A.jsx)(t.td, {
            children: `React and Next.js templates; blocks also in HTML and Vue`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Figma library`
          }), (0, A.jsx)(t.td, {
            children: `52 primitives, free on the Community`
          }), (0, A.jsx)(t.td, {
            children: `Not included, per their FAQ`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.p, {
      children: `If you're building marketing pages, Tailwind Plus does the job Kobra doesn't do at all. There's no hero section, no pricing table and no ecommerce category page in the Kobra catalog. If you're building the product behind the marketing page, a dashboard or a settings screen or an editor, the units invert. A block becomes a starting point you'll spend the week editing, and a component becomes something you install and stop thinking about.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `How you install it`
    }), `
`, (0, A.jsx)(t.p, {
      children: `This is the difference that compounds. One product is a copy-paste library and the other is a registry.`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {
            children: `Concern`
          }), (0, A.jsx)(t.th, {
            children: `Kobra`
          }), (0, A.jsx)(t.th, {
            children: `Tailwind Plus`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Install`
          }), (0, A.jsx)(t.td, {
            children: (0, A.jsx)(t.code, {
              children: `npx shadcn@latest add @kobra/toast`
            })
          }), (0, A.jsx)(t.td, {
            children: `Copy the block out of the website and paste it in`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Dependency resolution`
          }), (0, A.jsx)(t.td, {
            children: `Automatic; siblings and npm packages resolve through the registry`
          }), (0, A.jsx)(t.td, {
            children: `Manual: read the block, install what it imports`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Where the code lands`
          }), (0, A.jsxs)(t.td, {
            children: [(0, A.jsx)(t.code, {
              children: `components/ui/`
            }), ` in your repo, yours to edit`]
          }), (0, A.jsx)(t.td, {
            children: `Wherever you paste it`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Updates`
          }), (0, A.jsx)(t.td, {
            children: `Re-run the add command`
          }), (0, A.jsx)(t.td, {
            children: `Copy the block again and diff by hand`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Works with AI tooling`
          }), (0, A.jsx)(t.td, {
            children: `Yes, each component ships a prompt describing its API`
          }), (0, A.jsx)(t.td, {
            children: `Catalyst is documented; blocks are markup`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.p, {
      children: `Both approaches end with the source in your repository, which is the property that matters most and the one they share. No runtime dependency on a vendor, and no version of your button that you can't change. The registry difference is about the first ten minutes and every update after that.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Accessibility and interaction`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {
            children: `Concern`
          }), (0, A.jsx)(t.th, {
            children: `Kobra`
          }), (0, A.jsx)(t.th, {
            children: `Tailwind Plus`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Interactive primitives`
          }), (0, A.jsx)(t.td, {
            children: `Base UI: focus management, typeahead, collision handling`
          }), (0, A.jsx)(t.td, {
            children: `Headless UI, from the same authors as Tailwind`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Keyboard behavior`
          }), (0, A.jsx)(t.td, {
            children: `Inherited from Base UI on every overlay and menu`
          }), (0, A.jsx)(t.td, {
            children: `Inherited from Headless UI where blocks use it`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Reduced motion`
          }), (0, A.jsx)(t.td, {
            children: `Respected per component`
          }), (0, A.jsx)(t.td, {
            children: `Little motion to respect`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Complex widgets`
          }), (0, A.jsx)(t.td, {
            children: `Combobox, multi-select, command menu, OTP input, resizable panels`
          }), (0, A.jsx)(t.td, {
            children: `Combobox, listbox, dropdown, dialog via Catalyst`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.p, {
      children: `Both are serious about accessibility, and both hand it to a headless library rather than reimplementing it. The gap is coverage at the awkward end. Multi-select comboboxes, command menus, OTP inputs, drag-and-drop dropzones and resizable panels are where hand-built implementations usually go wrong, and that's where Kobra's catalog is deeper.`
    }), `
`, (0, A.jsx)(t.h2, {
      children: `Where Kobra goes deeper`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Interaction detail as the product`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Kobra components are built around the states that are easy to skip. The OTP input animates the paste. The toast stack handles swipe-to-dismiss with velocity. The command menu scales as you move between submenus, and the copy button morphs into a check. None of that is necessary to render a form. It's the difference between an interface that works and one that feels finished, and it's most of what the price buys.`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Tailwind Plus blocks are deliberately quieter. They're a starting point designed to be edited, and that restraint is a reasonable choice for markup you're expected to make your own.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Buying one component`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Kobra sells single components for $19. If you need a command menu and nothing else, that's the whole transaction. Buy ten and the credit covers the full library, so buying piecemeal never costs more than buying everything.`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Tailwind Plus is all or nothing. $299 for a personal license gets you everything, and there's no smaller unit.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `A Figma kit, free on the Community`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Kobra publishes a Figma library of 52 primitives drawn on the same color, spacing and radius variables the components are built from, free on the Figma Community and not gated behind a license.`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Tailwind Plus doesn't ship one. Its own FAQ is unambiguous: design assets for tools like Figma, Sketch or Adobe XD are not included. For a team with a designer, that's a whole half of the workflow one product covers and the other leaves to you.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Prompts that travel with the source`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Every Kobra component ships with a prompt describing its API and behavior, meant to be handed to Claude, Cursor or whatever is writing alongside you. The registry install puts it in the repo with the component, so the agent editing your code has the component's own documentation in context rather than a guess from its training data.`
    }), `
`, (0, A.jsx)(t.h2, {
      children: `Where Tailwind Plus goes deeper`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Tailwind Plus covers ground Kobra doesn't, and for some projects it isn't close.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Marketing and ecommerce surfaces`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Hero sections, pricing tables, feature grids, testimonial layouts, product listings, shopping carts, checkout forms. Kobra has none of this. If what you're building this week is a landing page or a storefront, Tailwind Plus is the tool and Kobra isn't in the running.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Full site templates`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Thirteen production templates, including Spotlight, Salient, Studio, Protocol and Syntax, built in React and Next.js. These are complete, deployable sites rather than components. Kobra ships no templates at all.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `First-party authority`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Tailwind Plus is made by the people who make Tailwind CSS. The blocks are how the framework's authors think the framework should be used, which makes them a genuine teaching resource as well as a shortcut, and it means the library moves the day a new Tailwind version does.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `More than React`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Blocks come as HTML, React and Vue. Kobra is React only. For a Vue or plain-HTML project, that ends the comparison on its own.`
    }), `
`, (0, A.jsx)(t.h3, {
      children: `Team pricing at scale`
    }), `
`, (0, A.jsx)(t.p, {
      children: `The Tailwind Plus team license covers up to 25 people for a flat $979. Kobra is priced per seat with no cap on how many you can hold, which is better value for a handful of people and worse for a large team. Above roughly six or seven seats, Tailwind Plus costs less per head.`
    }), `
`, (0, A.jsx)(t.h2, {
      children: `What they cost`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Both are one-time purchases with lifetime updates and no subscription, which is the most important thing they have in common.`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {}), (0, A.jsx)(t.th, {
            children: `Kobra`
          }), (0, A.jsx)(t.th, {
            children: `Tailwind Plus`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Individual`
          }), (0, A.jsx)(t.td, {
            children: `$199 one-time, 1 seat, lifetime`
          }), (0, A.jsx)(t.td, {
            children: `$299 one-time, personal, lifetime`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Team`
          }), (0, A.jsx)(t.td, {
            children: `$150 per seat, from 2 seats, no cap`
          }), (0, A.jsx)(t.td, {
            children: `$979 one-time, up to 25 people`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Smallest unit`
          }), (0, A.jsx)(t.td, {
            children: `$19 for one component`
          }), (0, A.jsx)(t.td, {
            children: `No smaller unit than the full license`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Free tier`
          }), (0, A.jsx)(t.td, {
            children: `10 components, full source, plus the whole Figma kit`
          }), (0, A.jsx)(t.td, {
            children: `Free preview of block markup on the site`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Figma library`
          }), (0, A.jsx)(t.td, {
            children: `Included, free on the Community`
          }), (0, A.jsx)(t.td, {
            children: `Not included`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Commercial use`
          }), (0, A.jsx)(t.td, {
            children: `Included`
          }), (0, A.jsx)(t.td, {
            children: `Included`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Reselling`
          }), (0, A.jsx)(t.td, {
            children: `Not permitted`
          }), (0, A.jsx)(t.td, {
            children: `Not permitted`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `License enforcement`
          }), (0, A.jsx)(t.td, {
            children: `One machine per seat, managed from the dashboard`
          }), (0, A.jsx)(t.td, {
            children: `Honor-based`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.p, {
      children: `For one developer, Kobra is $100 cheaper and Tailwind Plus is roughly seven times larger. For a team of ten, Tailwind Plus costs $979 flat against Kobra's per-seat pricing, and flat wins at that size. For most teams neither of those is the deciding number. The deciding question is which catalog contains the thing you're about to build.`
    }), `
`, (0, A.jsx)(t.p, {
      children: (0, A.jsx)(t.em, {
        children: `Prices read from the vendor's own pricing page on 7 September 2026.`
      })
    }), `
`, (0, A.jsx)(t.h2, {
      children: `Should you use both?`
    }), `
`, (0, A.jsx)(t.p, {
      children: `Often, yes, and they don't conflict. Tailwind Plus blocks and Kobra components are both Tailwind markup landing in your own repository. There's no runtime, no provider and no version to reconcile. A common shape is Tailwind Plus for the marketing site and Kobra for the application behind the login, with the two sharing a theme through Tailwind's design tokens.`
    }), `
`, (0, A.jsx)(t.p, {
      children: `The one thing to watch is that both ship a Button, an Input and a Dialog. Pick one for each primitive and delete the other rather than keeping two of everything. A codebase with two dialog implementations is one where half your team's focus traps behave differently from the other half's.`
    }), `
`, (0, A.jsx)(t.h2, {
      children: `When to choose Kobra or Tailwind Plus`
    }), `
`, (0, A.jsxs)(t.table, {
      children: [(0, A.jsx)(t.thead, {
        children: (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.th, {
            children: `If your project looks like…`
          }), (0, A.jsx)(t.th, {
            children: `Choose`
          }), (0, A.jsx)(t.th, {
            children: `Why`
          })]
        })
      }), (0, A.jsxs)(t.tbody, {
        children: [(0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `A dashboard, editor or settings surface behind a login`
          }), (0, A.jsx)(t.td, {
            children: `Kobra`
          }), (0, A.jsx)(t.td, {
            children: `Application primitives with the interaction states already handled`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `A landing page, pricing page or marketing site`
          }), (0, A.jsx)(t.td, {
            children: `Tailwind Plus`
          }), (0, A.jsx)(t.td, {
            children: `500+ blocks aimed squarely at this, and Kobra ships none`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `An ecommerce storefront or checkout`
          }), (0, A.jsx)(t.td, {
            children: `Tailwind Plus`
          }), (0, A.jsx)(t.td, {
            children: `Product, cart and checkout blocks Kobra doesn't have`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `You need one component and not a library`
          }), (0, A.jsx)(t.td, {
            children: `Kobra`
          }), (0, A.jsx)(t.td, {
            children: `$19 per component, with the cost credited toward full access`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `You need a complete site today`
          }), (0, A.jsx)(t.td, {
            children: `Tailwind Plus`
          }), (0, A.jsx)(t.td, {
            children: `Thirteen deployable templates`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Vue, plain HTML, or anything that is not React`
          }), (0, A.jsx)(t.td, {
            children: `Tailwind Plus`
          }), (0, A.jsx)(t.td, {
            children: `Kobra is React only`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `A designer needs the components in Figma`
          }), (0, A.jsx)(t.td, {
            children: `Kobra`
          }), (0, A.jsx)(t.td, {
            children: `A free Community kit; Tailwind Plus ships no design assets`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `A team of ten or more sharing one license`
          }), (0, A.jsx)(t.td, {
            children: `Tailwind Plus`
          }), (0, A.jsx)(t.td, {
            children: `Flat $979 for up to 25 people`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `Command menus, multi-selects, OTP inputs, resizable panels`
          }), (0, A.jsx)(t.td, {
            children: `Kobra`
          }), (0, A.jsx)(t.td, {
            children: `The awkward widgets are the center of the catalog`
          })]
        }), (0, A.jsxs)(t.tr, {
          children: [(0, A.jsx)(t.td, {
            children: `You want the source in your repo, no subscription`
          }), (0, A.jsx)(t.td, {
            children: `Either`
          }), (0, A.jsx)(t.td, {
            children: `Both are one-time, both hand over the code`
          })]
        })]
      })]
    }), `
`, (0, A.jsx)(t.p, {
      children: `These two libraries barely overlap. Tailwind Plus is broader, cheaper per head at scale, and the only option outside React. Kobra is deeper on the interactive components an application is actually made of, and it sells them one at a time. Most teams building a product will end up using one for the site and the other for the app.`
    })]
  });
}
function V(e = {}) {
  let {
    wrapper: t
  } = {
    ...O(),
    ...e.components
  };
  return t ? (0, A.jsx)(t, {
    ...e,
    children: (0, A.jsx)(B, {
      ...e
    })
  }) : B(e);
}
function H(e) {
  let [t, n] = (0, E.useState)(e[0]?.id ?? null);
  return (0, E.useEffect)(() => {
    let t = e.map(({
      id: e
    }) => document.getElementById(e)).filter(e => e !== null);
    if (t.length === 0) return;
    let r = new IntersectionObserver(() => {
      let e = t.filter(e => e.getBoundingClientRect().top <= 97).at(-1) ?? t[0];
      e && n(e.id);
    }, {
      rootMargin: `-96px 0px 0px 0px`
    });
    return t.forEach(e => r.observe(e)), () => r.disconnect();
  }, [e]), t;
}
function U({
  guide: e,
  headings: t,
  children: n
}) {
  let {
      user: r
    } = o({
      from: `__root__`
    }),
    d = a(),
    m = u.filter(t => t.slug !== e.slug),
    g = T[e.rival],
    _ = H(t);
  return <div className={`min-h-screen bg-background text-foreground`}>{[(0, A.jsx)(w, {
      user: r
    }), <main className={`mx-auto max-w-[75rem] px-4 pt-10 pb-20 sm:px-6 sm:pt-16 sm:pb-24`}>{[<header className={`mx-auto max-w-3xl text-center`}>{[<div aria-hidden={!0} className={`flex items-center justify-center gap-3`}>{[<span className={`flex size-14 items-center justify-center rounded-full bg-muted`}>{[<img src={`/brand/logomark-light.png`} alt={``} className={`size-7 dark:hidden`} />, <img src={`/brand/logomark-dark.png`} alt={``} className={`hidden size-7 dark:block`} />]}</span>, <span className={`text-sm text-muted-foreground`}>{`vs`}</span>, <span className={`flex size-14 items-center justify-center rounded-full bg-muted`}>{(0, A.jsx)(g, {})}</span>]}</div>, <h1 className={`mt-8 text-3xl leading-[1.05] font-bold tracking-tight text-balance sm:text-4xl`}>{e.title}</h1>, <p className={`mx-auto mt-4 max-w-2xl text-lg leading-7 text-balance text-muted-foreground`}>{e.description}</p>]}</header>, <div className={`mt-8 flex flex-col gap-8 xl:mt-10 xl:grid xl:grid-cols-[9rem_minmax(0,48rem)_9rem] xl:items-start xl:gap-12`}>{[<aside className={`order-first mx-auto w-full max-w-3xl text-sm text-muted-foreground xl:sticky xl:top-24 xl:order-none xl:col-start-3 xl:row-start-1 xl:mx-0 xl:max-w-none`}>{[t.length > 0 ? <nav aria-label={`On this page`} className={`hidden xl:block`}>{<ul className={`flex flex-col gap-y-2`}>{t.map(({
                id: e,
                text: t
              }) => <li key={e}>{<a href={`#${e}`} onClick={t => {
                  let n = document.getElementById(e);
                  n && (t.preventDefault(), n.scrollIntoView(x()), d({
                    to: `.`,
                    hash: e,
                    replace: !0,
                    resetScroll: !1,
                    hashScrollIntoView: !1
                  }));
                }} aria-current={e === _ ? `true` : void 0} className={s(`block text-pretty transition-colors duration-150 ease-out hover:text-foreground motion-reduce:transition-none`, e === _ && `font-medium text-primary`)}>{t}</a>}</li>)}</ul>}</nav> : null, t.length > 0 ? (0, A.jsx)(h, {
            className: `my-4 hidden xl:block`
          }) : null, <div className={`flex flex-wrap items-center gap-x-2 gap-y-1 xl:flex-col xl:items-start xl:gap-y-2`}>{[<time dateTime={e.checked}>{p(e.checked)}</time>, (0, A.jsx)(W, {
              className: `xl:hidden`
            }), <span>{[e.minutes, ` min read`]}</span>]}</div>]}</aside>, <article className={`mx-auto w-full max-w-3xl min-w-0 xl:col-start-2 xl:row-start-1 xl:mx-0 xl:-mt-[2px] [&>*:first-child]:mt-0`}>{n}</article>]}</div>, <nav aria-labelledby={`more-comparisons`} className={`mx-auto mt-16 max-w-3xl`}>{[<h2 id={`more-comparisons`} className={q}>{`More comparisons`}</h2>, <ul className={`mt-4 grid gap-3 sm:grid-cols-3`}>{m.map(e => <li key={e.slug}>{(0, A.jsxs)(i, {
              to: `/compare/$slug`,
              params: {
                slug: e.slug
              },
              className: `relative isolate block rounded-lg p-4 outline-none before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-muted before:transition-[scale,background-color] before:duration-150 before:ease-out hover:before:scale-[1.02] hover:before:bg-[color-mix(in_oklch,var(--muted),var(--foreground)_5%)] focus-visible:before:ring-2 focus-visible:before:ring-ring active:before:scale-[0.97] active:before:bg-[color-mix(in_oklch,var(--muted),var(--foreground)_9%)] motion-reduce:before:transition-[background-color] motion-reduce:hover:before:scale-100 motion-reduce:active:before:scale-100`,
              children: [<span className={`text-sm font-medium`}>{e.title}</span>, <span className={`mt-1 flex flex-wrap items-center gap-x-1.5 text-xs text-muted-foreground`}>{[<span>{[e.minutes, ` min read`]}</span>, (0, A.jsx)(W, {}), <time dateTime={e.checked}>{p(e.checked)}</time>]}</span>]
            })}</li>)}</ul>]}</nav>, <p className={`mx-auto mt-6 max-w-3xl leading-[1.65] text-muted-foreground`}>{[`Figures for `, e.rival, ` were read from`, ` `, <a href={l(e.rival)} rel={`nofollow noreferrer`} target={`_blank`} className={`underline underline-offset-2 hover:text-foreground`}>{`their own site`}</a>, ` `, `on `, f(e.checked), ` and may have changed since. `, c.brand, ` is not affiliated with `, e.rival, `, and every product named here belongs to its owner.`]}</p>]}</main>, (0, A.jsx)(C, {})]}</div>;
}
var W = ({
    className: e
  }) => <span aria-hidden={!0} className={s(`text-muted-foreground/40`, e)}>{`·`}</span>,
  G = {
    h2: ({
      children: e,
      ...t
    }) => (0, A.jsxs)(A.Fragment, {
      children: [<h2 id={typeof e == `string` ? S(e) : void 0} className={`mt-14 scroll-mt-24 text-2xl font-bold tracking-tight text-balance`} {...t}>{e}</h2>, (0, A.jsx)(h, {
        className: `mt-2`
      })]
    }),
    h3: e => <h3 className={s(`mt-10 scroll-mt-24`, q)} {...e} />,
    p: e => <p className={`mt-5 leading-[1.65] text-pretty text-muted-foreground [h3+&]:mt-3`} {...e} />,
    ul: e => <ul className={`mt-5 list-disc space-y-2 pl-5 leading-[1.65] text-muted-foreground [h3+&]:mt-3`} {...e} />,
    ol: e => <ol className={`mt-5 list-decimal space-y-2 pl-5 leading-[1.65] text-muted-foreground [h3+&]:mt-3`} {...e} />,
    strong: e => <strong className={`font-semibold text-foreground`} {...e} />,
    a: ({
      href: e,
      ...t
    }) => e?.startsWith(`/`) ? (0, A.jsx)(i, {
      to: e,
      className: K,
      ...t
    }) : <a href={e} rel={`nofollow noreferrer`} target={`_blank`} className={K} {...t} />,
    code: e => <code className={`rounded bg-muted px-1.5 py-0.5 font-code text-[0.85em] text-foreground`} {...e} />,
    table: e => <div className={`mt-6`}>{(0, A.jsx)(b, {
        ...e
      })}</div>,
    thead: e => (0, A.jsx)(m, {
      ...e
    }),
    tbody: e => (0, A.jsx)(_, {
      ...e
    }),
    tr: e => (0, A.jsx)(v, {
      ...e
    }),
    th: ({
      className: e,
      ...t
    }) => (0, A.jsx)(g, {
      className: s(`py-2.5 align-bottom leading-6 font-medium whitespace-normal`, e),
      ...t
    }),
    td: ({
      className: e,
      ...t
    }) => (0, A.jsx)(y, {
      className: s(`py-2.5 align-top leading-6 whitespace-normal text-muted-foreground normal-nums`, e),
      ...t
    }),
    em: e => <em className={`italic`} {...e} />
  },
  K = `font-medium text-foreground underline underline-offset-2 hover:no-underline`,
  q = `text-lg font-bold tracking-tight`,
  J = {
    "kobra-vs-magic-ui": [{
      text: `How Kobra and Magic UI Pro compare`,
      id: `how-kobra-and-magic-ui-pro-compare`
    }, {
      text: `Where Kobra goes deeper`,
      id: `where-kobra-goes-deeper`
    }, {
      text: `Where Magic UI Pro goes deeper`,
      id: `where-magic-ui-pro-goes-deeper`
    }, {
      text: `What they cost`,
      id: `what-they-cost`
    }, {
      text: `Should you use both?`,
      id: `should-you-use-both`
    }, {
      text: `When to choose Kobra or Magic UI Pro`,
      id: `when-to-choose-kobra-or-magic-ui-pro`
    }],
    "kobra-vs-shadcn-io": [{
      text: `How Kobra and shadcn.io compare`,
      id: `how-kobra-and-shadcn-io-compare`
    }, {
      text: `Where Kobra goes deeper`,
      id: `where-kobra-goes-deeper`
    }, {
      text: `Where shadcn.io goes deeper`,
      id: `where-shadcn-io-goes-deeper`
    }, {
      text: `What they cost`,
      id: `what-they-cost`
    }, {
      text: `Should you use both?`,
      id: `should-you-use-both`
    }, {
      text: `When to choose Kobra or shadcn.io`,
      id: `when-to-choose-kobra-or-shadcn-io`
    }],
    "kobra-vs-shadcn-pro": [{
      text: `How Kobra and shadcn/ui Pro compare`,
      id: `how-kobra-and-shadcn-ui-pro-compare`
    }, {
      text: `Where Kobra goes deeper`,
      id: `where-kobra-goes-deeper`
    }, {
      text: `Where shadcn/ui Pro goes deeper`,
      id: `where-shadcn-ui-pro-goes-deeper`
    }, {
      text: `What they cost`,
      id: `what-they-cost`
    }, {
      text: `Should you use both?`,
      id: `should-you-use-both`
    }, {
      text: `When to choose Kobra or shadcn/ui Pro`,
      id: `when-to-choose-kobra-or-shadcn-ui-pro`
    }],
    "kobra-vs-tailwind-plus": [{
      text: `How Kobra and Tailwind Plus compare`,
      id: `how-kobra-and-tailwind-plus-compare`
    }, {
      text: `Where Kobra goes deeper`,
      id: `where-kobra-goes-deeper`
    }, {
      text: `Where Tailwind Plus goes deeper`,
      id: `where-tailwind-plus-goes-deeper`
    }, {
      text: `What they cost`,
      id: `what-they-cost`
    }, {
      text: `Should you use both?`,
      id: `should-you-use-both`
    }, {
      text: `When to choose Kobra or Tailwind Plus`,
      id: `when-to-choose-kobra-or-tailwind-plus`
    }]
  },
  Y = Object.assign({
    "../content/comparisons/kobra-vs-magic-ui.mdx": k,
    "../content/comparisons/kobra-vs-shadcn-io.mdx": N,
    "../content/comparisons/kobra-vs-shadcn-pro.mdx": I,
    "../content/comparisons/kobra-vs-tailwind-plus.mdx": z
  }),
  X = e => Y[`../content/comparisons/${e}.mdx`]?.default;
function Z() {
  let {
    guide: e
  } = d.useLoaderData();
  return (0, A.jsx)(U, {
    guide: e,
    headings: J[e.slug] ?? [],
    children: (0, E.createElement)(X(e.slug), {
      components: G
    })
  });
}
export { Z as component };
