---
title: "GSoC 2025 Week 5 & 6"
description: "Passed mid evals & almost done with the project"
date: "July 21 2025"
---

I just passed the mid evals, grateful to my mentors who guided me throughout.

### Context of project:

For my Google Summer of Code project, I'm adding a cool new feature to PyBaMM. My goal is to let it run 3D thermal simulations that work together with its battery models. This will help us understand how batteries heat up in 3D.

### Work:

Here’s what I’ve done so far:

- [3D Thermal Model](https://github.com/pybamm-team/PyBaMM/pull/5112): I am done with my 3D thermal PR. In this I implemented a `Basic3DSPMThermal` model in PyBaMM with two way coupling. I also added an example comparing it with lumped model with high thermal conductivity. The results are similar which are as expected:

    ![3DSPM vs Lumped Diagram](https://res.cloudinary.com/dhodvtp0u/image/upload/v1753107790/Rishab/Figure_1_qrz7n8.png)

- [2D & 3D Heatmaps](https://github.com/Rishab87/PyBaMM/pull/3): I also started working on adding 2D & 3D heatmap in PyBaMM, its almost done too. (currently it's on my own fork as 3D thermal PR is still being actively reviewed).

- Challenges: I was facing few challenges with BCs in thermal model & also I was getting weird values in the heatmap of 3D pouch cell. My mentor helped me debug it, the problem was pretty simple, source terms in the model needed to be explicitly wrapped in `pybamm.source` so they get multiplied by the mass matrix.

In week 5 & 6, I planned to just get started with 3D thermal model & the whole project is about to get over. So pretty much on track again.