package com.hostelmanagment.HostelManagementSys.controller;

import com.hostelmanagment.HostelManagementSys.model.Tenant;
import com.hostelmanagment.HostelManagementSys.service.TenantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tenants")
@CrossOrigin("*")
public class TenantController {

    @Autowired
    private TenantService tenantService;

    @GetMapping
    public List<Tenant> getAllTenant(){
        return tenantService.getAllTenant();
    }

    @PostMapping
    public String addTenant(@RequestBody Tenant tenant){

        return tenantService.addTenant(tenant);
    }
    @GetMapping("/{id}")
    public Tenant getTenantById(@PathVariable int id){
        return  tenantService.getTenantById(id);
    }

    @DeleteMapping ("/{id}")
    public String deleteTenantById(@PathVariable int id){
        return  tenantService.deleteTenantById(id);
    }

    @PutMapping("/{id}")
    public String updateTenant(@PathVariable int id ,@RequestBody Tenant tenant){
        return tenantService.updateTenant(id,tenant);
    }
}