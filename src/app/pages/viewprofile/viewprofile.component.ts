import { Component } from '@angular/core';

@Component({
  selector: 'app-viewprofile',
  imports: [], // ถ้าคุณไม่ต้องการนำเข้าโมดูลอะไรให้ทิ้งไว้แบบนี้
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css'],
  standalone: true, // เพิ่ม standalone: true ถ้าคุณใช้ Angular Standalone Components
})
export class ViewprofileComponent {
  // คุณสามารถเพิ่มข้อมูลหรือฟังก์ชันที่เกี่ยวข้องกับการแสดงโปรไฟล์ที่นี่
}
