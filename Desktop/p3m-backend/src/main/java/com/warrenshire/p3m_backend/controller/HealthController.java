package com.warrenshire.p3m_backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/api/health")
    public String checkHealth() {
        return "P3M Backend is up and running! Ready for the Council project.";
    }
}