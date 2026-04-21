'use client';

import { useState } from 'react';
import { Users, FolderKanban, Settings, BarChart3, LogOut, Plus, MoreVertical } from 'lucide-react';

type Role = 'DIRETORIA' | 'ADMIN' | 'COMERCIAL' | 'MEMBER' | 'VIEWER';

interface Member {
  id: string;
  name: string;
  email: string;
  role: Role;
  department?: string;
  active: boolean;
}

interface Project {
  id: string;
  name: string;
  status: 'ACTIVE' | 'ON_HOLD' | 'COMPLETED';
}

const mockMembers: Member[] = [
  { id: '1', name: 'Ana Silva', email: 'ana@empresa.com', role: 'DIRETORIA', department: 'Gestao', active: true },
  { id: '2', name: 'Carlos Santos', email: 'carlos@empresa.com', role: 'COMERCIAL', department: 'Vendas', active: true },
  { id: '3', name: 'Maria Oliveira', email: 'maria@empresa.com', role: 'MEMBER', department: 'Projetos', active: true },
  { id: '4', name: 'Pedro Costa', email: 'pedro@empresa.com', role: 'MEMBER', department: 'Projetos', active: false },
];

const mockProjects: Project[] = [
  { id: '1', name: 'Website Corporativo', status: 'ACTIVE' },
  { id: '2', name: 'App Mobile', status: 'ON_HOLD' },
  { id: '3', name: 'ERP Integration', status: 'ACTIVE' },
  { id: '4', name: 'Marketing Campaign', status: 'COMPLETED' },
];

export default function ERPApp() {
  const [activeTab, setActiveTab] = useState<'members' | 'projects'>('members');
  const currentUserRole: Role = 'DIRETORIA';

  const canEdit = currentUserRole === 'DIRETORIA' || currentUserRole === 'ADMIN';
  const canDelete = currentUserRole === 'DIRETORIA';

  const getRoleBadge = (role: Role) => {
    const colors: Record<Role, string> = {
      DIRETORIA: 'bg-purple-600',
      ADMIN: 'bg-blue-600',
      COMERCIAL: 'bg-green-600',
      MEMBER: 'bg-dark-600',
      VIEWER: 'bg-dark-500',
    };
    return colors[role];
  };

  return (
    <div className="flex min-h-screen bg-dark-950">
      <aside className="w-64 bg-dark-900 border-r border-dark-800 p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">
            <span className="accent-text">ERP</span>Govern
          </h1>
        </div>

        <nav className="space-y-2">
          <button onClick={() => setActiveTab('members')} className={`sidebar-link w-full ${activeTab === 'members' ? 'active' : ''}`}>
            <Users size={20} />
            <span>Membros</span>
          </button>
          <button onClick={() => setActiveTab('projects')} className={`sidebar-link w-full ${activeTab === 'projects' ? 'active' : ''}`}>
            <FolderKanban size={20} />
            <span>Projetos</span>
          </button>
          <button className="sidebar-link w-full">
            <BarChart3 size={20} />
            <span>Relatorios</span>
          </button>
          <button className="sidebar-link w-full">
            <Settings size={20} />
            <span>Configuracoes</span>
          </button>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-dark-800">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-black font-bold">A</div>
            <div>
              <p className="text-sm font-medium">Ana Silva</p>
              <p className="text-xs text-dark-400">DIRETORIA</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-8">
        {activeTab === 'members' && (
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Gestao de Membros</h2>
              {canEdit && (
                <button className="btn-primary px-4 py-2 rounded-lg flex items-center gap-2">
                  <Plus size={18} />
                  Novo Membro
                </button>
              )}
            </div>

            <div className="card overflow-hidden">
              <table className="w-full">
                <thead className="bg-dark-800">
                  <tr>
                    <th className="text-left p-4">Nome</th>
                    <th className="text-left p-4">Email</th>
                    <th className="text-left p-4">Departamento</th>
                    <th className="text-left p-4">Cargo</th>
                    <th className="text-left p-4">Status</th>
                    {canDelete && <th className="text-left p-4">Acoes</th>}
                  </tr>
                </thead>
                <tbody>
                  {mockMembers.map((member) => (
                    <tr key={member.id} className="border-t border-dark-700">
                      <td className="p-4">{member.name}</td>
                      <td className="p-4 text-dark-400">{member.email}</td>
                      <td className="p-4">{member.department || '-'}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getRoleBadge(member.role)}`}>
                          {member.role}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded text-xs ${member.active ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'}`}>
                          {member.active ? 'Ativo' : 'Inativo'}
                        </span>
                      </td>
                      {canDelete && (
                        <td className="p-4">
                          <button className="p-2 hover:bg-dark-700 rounded">
                            <MoreVertical size={16} />
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === 'projects' && (
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Projetos Comerciais</h2>
              {canEdit && (
                <button className="btn-primary px-4 py-2 rounded-lg flex items-center gap-2">
                  <Plus size={18} />
                  Novo Projeto
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {['TODO', 'IN_PROGRESS', 'REVIEW', 'DONE'].map((status) => (
                <div key={status} className="card p-4">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${status === 'TODO' ? 'bg-dark-400' : status === 'IN_PROGRESS' ? 'bg-blue-500' : status === 'REVIEW' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                    {status.replace('_', ' ')}
                  </h3>
                  <div className="space-y-2">
                    {mockProjects.filter((_, i) => i % 2 === 0).map((project) => (
                      <div key={project.id} className="p-3 bg-dark-800 rounded-lg text-sm">
                        {project.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}