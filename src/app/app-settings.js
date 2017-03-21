"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppSettings {
}
AppSettings.apiEndpoint = '/data/';
AppSettings.subcutaneous = [{ k: 't', t: 'Sampling Time' }, { k: 'ins', t: 'Insulin Type' }, { k: 'col1', t: 'Column 1', type: 'number' }, { k: 'col2', t: 'Column 2', type: 'number' }, { k: 'col3', t: 'Column 3', type: 'number' }, { k: 'col4', t: 'Column 4', type: 'number' }, { k: 'col5', t: 'Column 5', type: 'number' }, { k: 'col6', t: 'Column 6', type: 'number' }, { k: 'col7', t: 'Column 7', type: 'number' }, { k: 'col8', t: 'Column 8', type: 'number' }];
AppSettings.infusion = [{ k: 'min', t: 'Min Glucose' }, { k: 'max', t: 'Max Glucose' }, { k: 'col1', t: 'Column 1', type: 'number' }, { k: 'col2', t: 'Column 2', type: 'number' }, { k: 'col3', t: 'Column 3', type: 'number' }, { k: 'col4', t: 'Column 4', type: 'number' }, { k: 'col5', t: 'Column 5', type: 'number' }, { k: 'col6', t: 'Column 6', type: 'number' }, { k: 'col7', t: 'Column 7', type: 'number' }, { k: 'col8', t: 'Column 8', type: 'number' }];
AppSettings.pages = [{ title: 'Patient List', access: ['doctor', 'nurse', 'admin'], route: ['patient-list'] }, { title: 'Patient', access: ['doctor', 'nurse', 'admin'], route: ['patient'], hidden: true }, { title: 'My Transactions', access: ['doctor', 'nurse', 'admin'], route: ['transactions'] }, { title: 'Manage Protocol', access: ['doctor', 'admin'], route: ['manage-protocol'] }, { title: 'Validate Protocol', access: ['doctor', 'admin'], route: ['validate-protocol'] }, { title: 'Manage Users', access: ['admin'], route: ['manage-users'] }, { title: 'Logout', access: ['doctor', 'nurse', 'admin'], route: ['logout'] }];
exports.AppSettings = AppSettings;
//# sourceMappingURL=app-settings.js.map