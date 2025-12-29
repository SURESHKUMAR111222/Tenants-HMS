package com.hostelmanagment.HostelManagementSys.service;

import com.hostelmanagment.HostelManagementSys.model.Tenant;
import com.hostelmanagment.HostelManagementSys.repository.TenantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class TenantService {

    @Autowired
    private TenantRepository tenantRepository;

    public List<Tenant> getAllTenant() {
        return tenantRepository.getAllTenant();
    }

    public String addTenant(Tenant tenant) {
        tenantRepository.addTenant(tenant);
        return "Added Successfully";
    }

    public Tenant getTenantById(int id) {
        return tenantRepository.getTenantById(id);
    }

    public String deleteTenantById(int id) {
        tenantRepository.deleteTenantById(id);
        return "Deleted Successfully";
    }

    public String updateTenant(int id, Tenant tenant) {
        tenantRepository.updateTenant(id,tenant);
        return "Updated Successfully";
    }
}