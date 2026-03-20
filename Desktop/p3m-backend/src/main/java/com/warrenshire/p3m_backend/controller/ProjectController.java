package com.warrenshire.p3m_backend.controller;

import com.warrenshire.p3m_backend.entity.Project;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;

@RestController
public class ProjectController {

    @GetMapping("/api/projects")
    public List<Project> getProjects() {
        Project p1 = new Project();
        p1.setId(1L);
        p1.setTitle("Warren Levee Rehabilitation");
        p1.setCurrentStage("Execution");
        p1.setBudget(250000.0);
        p1.setIsGrantFunded(true);
        p1.setManagerName("Joe Joseph");

        return Arrays.asList(p1);
    }
}