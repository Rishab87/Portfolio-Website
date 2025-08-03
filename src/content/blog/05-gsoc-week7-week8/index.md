---
title: "GSoC 2025 Week 7 & 8"
description: "Completed the project and faced some issues."
date: "July 21 2025"
---

So I completed my project & faced few non-deterministic issues in CI.

### Context of project:

For my Google Summer of Code project, I'm adding a cool new feature to PyBaMM. My goal is to let it run 3D thermal simulations that work together with its battery models. This will help us understand how batteries heat up in 3D.

### Work:

Here’s what I’ve done so far these weeks:

- [3D Thermal Model](https://github.com/pybamm-team/PyBaMM/pull/5112): My 3D thermal PR finally got merged.

- [2D & 3D Heatmaps](https://github.com/Rishab87/PyBaMM/pull/3): I also finished this PR and put it up on main repo. Its still not merged yet, reviews are going on.

- [Final Product Prep](https://github.com/Rishab87/PyBaMM/pull/4): I also made a PR (on my own fork) with a jupyter notbook where we are studying **Thermal Management of Batteries in EVs** with the 3D functionality for the final product blog post which we need to provide in final evals. In this we are taking different cooling techniques, drawing out heatmaps and making conclusion which one is better. More about it on final product blog post.

- Challenges: One of the maintainer's of PyBaMM pointed out in this [issue](https://github.com/pybamm-team/PyBaMM/issues/5142) that after my thermal 3D PR got merged CI sometimes fails non-deterministically due to a `ShapeError` in 3D FEM's gradient method. I tried tracking it down and found the root cause and made a [PR](https://github.com/pybamm-team/PyBaMM/pull/5143) which would fix this.

    The problem was when evaluating the gradient of a constant parameter, like thermal conductivity (`lambda_eff`), which PyBaMM simplifies to a pybamm.Scalar. The gradient method was not designed to handle a scalar input and would attempt an invalid matrix-scalar multiplication.

    But I was still not sure about its non-deterministic nature and why was I not able to caught it earlier and found few more tests in PyBaMM failing non-deterministically, my guest guess seeing this pattern is while simplifying complex expresssions there might be definitely some kind of race condition due to the order of operations. I reported this to the maintainer in the issue itself.

In this week I planned to implement thermal model with just a constant heat source according to my proposal's timeline and the project is almost done so pretty much on track.