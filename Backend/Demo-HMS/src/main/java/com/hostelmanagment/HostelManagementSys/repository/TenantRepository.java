package com.hostelmanagment.HostelManagementSys.repository;

import com.hostelmanagment.HostelManagementSys.model.Tenant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class TenantRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;


    public List<Tenant> getAllTenant() {
        String sql="select * from tenants";
        return jdbcTemplate.query(sql,new BeanPropertyRowMapper<>(Tenant.class));
    }

    public void addTenant(Tenant tenant){
        String sql="INSERT INTO tenants (name, email, phone_number, room_type, room_no, floor) VALUES (?,?,?,?,?,?) ";
        jdbcTemplate.update(sql,tenant.getName(),tenant.getEmail(),
                tenant.getPhoneNumber(),tenant.getRoomType(),tenant.getRoomNo(),tenant.getFloor());


    }


    public Tenant getTenantById(int id) {

        String sql = "select * from tenants where id="+id;
        return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(Tenant.class));
    }

    public void deleteTenantById(int id) {
        String sql="delete from tenants where id="+id;
        jdbcTemplate.update(sql);
    }

    public void updateTenant(int id, Tenant tenant) {
        String sql="update tenants set name=?, email=? , phone_number=? , room_type=? , room_no=? , floor=?  where id="+id;

        jdbcTemplate.update(sql,tenant.getName(),tenant.getEmail(),
                tenant.getPhoneNumber(),tenant.getRoomType(),tenant.getRoomNo(),tenant.getFloor());
    }
}