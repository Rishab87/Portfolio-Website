---
title: "LFX Mentorship Experience: Automating the Release Process of KSM"
description: "My LFX mentorship experience, what I built, and everything I learned along the way."
date: "Nov 27 2025"
---

I recently wrapped up my LFX Mentorship with Kubernetes’ kube-state-metrics (KSM), and honestly, it was an amazing experience. In this post, I want to share what I worked on, what I learned, and overall how these three months helped me grow as an engineer.

## Project

My project focused on automating the entire release process of kube-state-metrics, which previously took a lot of manual effort every few months. To make things smoother for maintainers, I built a set of GitHub workflows that handle the full pipeline end-to-end—automating the commands needed for creating the pre-release PR, generating pre-releases using GoReleaser, creating release notes, and even taking care of the post-release steps. Turning this multi-step, manual, and often boring process into a reliable automated workflow now makes cutting new KSM releases much faster, more consistent, and way easier for the team.

## What I did throughout

Coincidentally, when my mentorship started, a new KSM release was just around the corner. My mentors handed me complete ownership of cutting that release. This was super helpful because it gave me hands-on exposure to how the release process actually works, and helped me understand each step deeply and honestly, also helped me feel the pain of doing all of it manually.

From there, I started automating each step from `RELEASE.md` one by one and tested everything in my fork’s CI. I faced a bunch of challenges along the way like deciding which tooling made the most sense, figuring out where to draw the line between custom scripts and existing tools, and making sure my automations were clean enough to avoid future maintenance overhead. But solving these problems was the fun part.

## Overall experience

My overall LFX Mentorship experience was genuinely awesome. My mentors were super supportive and always there whenever I got stuck, which made the entire journey smooth and enjoyable. I learned a ton especially around release engineering, CI/CD workflows, GitHub Actions, and how real-world teams actually manage releases in production. It was exactly the kind of hands-on, industry level exposure I was looking for, and I honestly have no complaints just a lot of gratitude for how much I learned and how welcoming the community was.

## Some flaws and future improvements

Even after all the automation, the release process still requires some manual intervention like running the post-release workflow after images are built and tested on Prow, running the `kpromo` command locally to promote images, and dealing with the fact that CI can’t handle certain steps because it requires a k8s.io PAT. There’s definitely room to improve this further.
