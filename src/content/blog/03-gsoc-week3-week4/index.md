---
title: "GSoC 2025 Week 3 & 4"
description: "Started 3D thermal"
date: "July 4 2025"
---

A bit late on this one, here's my progress so far.

### Context of project:

For my Google Summer of Code project, I'm adding a cool new feature to PyBaMM. My goal is to let it run 3D thermal simulations that work together with its battery models. This will help us understand how batteries heat up in 3D.

### Work:

Here’s what I’ve done so far:

- [3D FEM](https://github.com/pybamm-team/PyBaMM/pull/5009): I completed my PR on which I was working last 2 weeks (for more context see the previous blog).
- 3D Thermal Model: I started the work wtih 3D thermal model, first I tried to implement a thermal submodel in PyBaMM and got a lot of issues, then my mentor suggested to modify the existing electrochemical models to add 3D temp with two way coupling which would be a bit easier compared to adding a thermal model. So I did that and I'm almost done with it.
- Challenges: An ideal way to test 3D thermal model's results is to compare it with a lumped model with high thermal conductivity, but the plot looked off, there might be a problem with my BCs calculation or heat source calculations so need to fix that. Apart from this for cylindrical geometry I am not able to run the code now since `r` which I am using for radius is not a standard spatial variable in PyBaMM so it throws error, tried a lot of work arounds, need to discuss this with my mentor what's the proper way we should do this in PyBaMM. Hopefully these issues will be resolved and thi PR would be completed soon.

In week 3 & 4, I planned to implement the FEM method and I'm done with the work till mid evals, so yeah again pretty much on track of the timeline.

You can see my work on 3D thermal model till now here(its on my own fork since the old PR is still being reviewed actively): [3D Thermal Model](https://github.com/Rishab87/PyBaMM/pull/1)