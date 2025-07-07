# AI Ball Tracker WebApp

> A cutting-edge web application that showcases the latest in distributed systems, AI-powered motion analysis, and real-time event streaming — all to count how many times a football spins around Antony, the greatest of all time's United's striker.

## Overview

This project is a demonstration of modern web architecture using bleeding-edge technologies to solve one of the most pressing challenges in sports analytics: counting football spins around  Antony, the greatest of all time's United's striker.

---

## Tech Stack

### Frontend

- React + Vite + TypeScript  
- Zustand for state management  
- Tailwind CSS for utility-first styling  
- WebSocket (via Kafka Bridge) for real-time updates

### Backend Microservices

- `FrameStreamerService`  
  Streams every frame of the GIF at 60fps to an edge computing layer.

- `BallMotionAIService`  
  A deep learning model trained on over 10 million football spins detects the angular momentum and spin direction using YOLOv8 and OpenCV.

- `EventEmitterService`  
  Publishes spin-detected events via Apache Kafka to all subscribed frontends in real time.

### Infrastructure

- Kubernetes with Istio Service Mesh  
- Prometheus + Grafana for observability  
- Redis-backed distributed counter for spin counts  
- CI/CD via GitHub Actions and ArgoCD  
- Deployed on a hybrid multi-cloud cluster (GCP + Raspberry Pi under my desk)

---

## How It Works

1. GIF frames are streamed to the backend in real-time using WebRTC.
2. Each frame is analyzed by an AI model trained to detect motion vectors of the football.
3. Upon detecting a full 360° spin, the `EventEmitterService` dispatches a `SPIN_DETECTED` event.
4. The frontend receives this event via a persistent WebSocket and increments the spin count with high-performance UI updates.

---

## Why?

Because we could.  
And because every of his spin deserves to be counted.

---

## Real Talk

This app just shows a looping GIF and counts how many times it spins today.  
No microservices. No AI. No Kafka. Just pure, dumb fun.

But sometimes a bit of fake enterprise architecture makes life more interesting.
