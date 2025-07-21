---
title: "GSoC 2025 Week 1 & 2"
description: "Adding 3D FEM"
date: "June 15 2025"
---

Since week 1 & 2 of gsoc are over, here is my progress so far.

### Context of project:

For my Google Summer of Code project, I'm adding a cool new feature to PyBaMM. My goal is to let it run 3D thermal simulations that work together with its battery models. This will help us understand how batteries heat up in 3D.

### Work:

I started a little early to get a head start. Here’s what I’ve done:

- Added 3D Mehses: I implemented 3D meshes, for generating different meshes like cylindrical aur jelly roll geometries I used scikit-fem. It was pretty easy to implement them.

- Challenges while implementing FVM: The main challenges came when I started implementing Finite Volume 3D method, I was facing quite a few shape errors, debugged them with my mentor's help

- A better approach: Later I realised while solving complex unstructured tetrahedra 3D geometries like jelly roll FVM 3D method was not working quite well. Then I got to know about Finite Element Method which can be used to solve unstructured 3D meshes helping in adding support for complex geometries in 3D which is one of the main focus of this project. So I migrated from FVM to FEM and changed my meshes and naming conventions a bit and now its almost done.

In week 1 & 2, I planned to implement just the meshes and the work till week 4 is about to get finished, so yeah pretty much on track of the timeline.

You can see my work till now here: [3D FEM](https://github.com/pybamm-team/PyBaMM/pull/5009)