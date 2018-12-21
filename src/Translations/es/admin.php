<?php

return [

    /*
     *  Constants
     */
    'nav-settings'                            => 'Configuración',
    'nav-agents'                              => 'Agentes',
    'nav-dashboard'                           => 'Dashboard',
    'nav-categories'                          => 'Categorías',
    'nav-priorities'                          => 'Prioridades',
    'nav-statuses'                            => 'Estados',
    'nav-configuration'                       => 'Configuración',
    'nav-administrator'                       => 'Administrador', //new

    'table-hash'                              => '#',
    'table-id'                                => 'ID',
    'table-name'                              => 'Nombre',
    'table-action'                            => 'Acción',
    'table-categories'                        => 'Categorías',
    'table-join-category'                     => 'Categorías asignadas',
    'table-remove-agent'                      => 'Eliminar de agentes',
    'table-remove-administrator'              => 'Eliminar de administradores', // New

    'table-slug'                              => 'Código',
    'table-default'                           => 'Valor predeterminado',
    'table-value'                             => 'Valor actual',
    'table-lang'                              => 'Idioma',
    'table-edit'                              => 'Editar',

    'btn-back'                                => 'Atrás',
    'btn-delete'                              => 'Borrar',
    'btn-edit'                                => 'Editar',
    'btn-join'                                => 'Asignar',
    'btn-remove'                              => 'Eliminar',
    'btn-submit'                              => 'Enviar',
    'btn-save'                                => 'Guardar',
    'btn-update'                              => 'Actualizar',

    'colon'                                   => ': ',

    /*
     *  Page specific
     */

    // tickets-admin/____
    'index-title'                             => 'Dashboard del Sistema de Tickets',
    'index-empty-records'                     => 'Sin tickets',
    'index-total-tickets'                     => 'Tickets totales',
    'index-open-tickets'                      => 'Tickets abiertos',
    'index-closed-tickets'                    => 'Tickets cerrados',
    'index-performance-indicator'             => 'Rendimiento',
    'index-periods'                           => 'Periodos',
    'index-3-months'                          => '3 meses',
    'index-6-months'                          => '6 meses',
    'index-12-months'                         => '12 meses',
    'index-tickets-share-per-category'        => 'Tickets por categoría',
    'index-tickets-share-per-agent'           => 'Tickets por agente',
    'index-categories'                        => 'Categorías',
    'index-category'                          => 'Categoría',
    'index-agents'                            => 'Agentes',
    'index-agent'                             => 'Agente',
    'index-administrators'                    => 'Administradores', //new
    'index-administrator'                     => 'Administrador', //new
    'index-users'                             => 'Usuarios',
    'index-user'                              => 'Usuario',
    'index-tickets'                           => 'Tickets',
    'index-open'                              => 'Abierto',
    'index-closed'                            => 'Cerrado',
    'index-total'                             => 'Total',
    'index-month'                             => 'Mes',
    'index-performance-chart'                 => 'Días de promedio para cerrar un ticket',
    'index-categories-chart'                  => 'Distribución de tickets por categoría',
    'index-agents-chart'                      => 'Distribución de tickets por agente',

    // tickets-admin/agent/____
    'agent-index-title'                       => 'Administración de agentes',
    'btn-create-new-agent'                    => 'Crear agente',
    'agent-index-no-agents'                   => 'No existen agentes, ',
    'agent-index-create-new'                  => 'agentes',
    'agent-create-title'                      => 'Añadir agente',
    'agent-create-add-agents'                 => 'Añadir agentes',
    'agent-create-no-users'                   => 'No hay cuentas de usuarios, deben ser creadas.',
    'agent-create-select-user'                => 'Cuentas de usuario para añadir como agentes',

    // tickets-admin/administrators/____
    'administrator-index-title'               => 'Gestión de administradores', //new
    'btn-create-new-administrator'            => 'Crear administrador', //new
    'administrator-index-no-administrators'   => 'No existen administradores, ', //new
    'administrator-index-create-new'          => 'Añadir administradores', //new
    'administrator-create-title'              => 'Añadir administrador', //new
    'administrator-create-add-administrators' => 'Añadir administradores', //new
    'administrator-create-no-users'           => 'No existen cuentas de usuario, deben ser creadas.', //new
    'administrator-create-select-user'        => 'Selecciona las cuentas de usuario para añadir como administradores', //new

    // tickets-admin/category/____
    'category-index-title'                    => 'Administración de categorías',
    'btn-create-new-category'                 => 'Crear categoría nueva',
    'category-index-no-categories'            => 'No existen categorías, ',
    'category-index-create-new'               => 'crear categoría nueva',
    'category-index-js-delete'                => '¿Estás seguro que desea borrar la categoría?: ',
    'category-create-title'                   => 'Crear categoría',
    'category-create-name'                    => 'Nombre',
    'category-create-color'                   => 'Color',
    'category-edit-title'                     => 'Editar categoría: :name',

    // tickets-admin/priority/____
    'priority-index-title'                    => 'Administración de Prioridades',
    'btn-create-new-priority'                 => 'Crear prioridad nueva',
    'priority-index-no-priorities'            => 'No existen prioridades, ',
    'priority-index-create-new'               => 'crear prioridad nueva',
    'priority-index-js-delete'                => '¿Seguro que desea borrar la prioridad?: ',
    'priority-create-title'                   => 'Crear prioridad nueva',
    'priority-create-name'                    => 'Nombre',
    'priority-create-color'                   => 'Color',
    'priority-edit-title'                     => 'Editar prioridad: :name',

    // tickets-admin/status/____
    'status-index-title'                      => 'Administración de estados',
    'btn-create-new-status'                   => 'Crear estado nuevo',
    'status-index-no-statuses'                => 'No existen estados,',
    'status-index-create-new'                 => 'crear estado nuevo',
    'status-index-js-delete'                  => '¿Seguro de que desea borrar el estado?: ',
    'status-create-title'                     => 'Crear estado nuevo',
    'status-create-name'                      => 'Nombre',
    'status-create-color'                     => 'Color',
    'status-edit-title'                       => 'Editar Estado: :name',

    // tickets-admin/configuration/____
    'config-index-title'                      => 'Administración de configuraciones',
    'config-index-subtitle'                   => 'Configuraciones',
    'btn-create-new-config'                   => 'Añadir configuración nueva',
    'config-index-no-settings'                => 'No existen configuraciones,',
    'config-index-initial'                    => 'Inicial',
    'config-index-tickets'                    => 'Tickets',
    'config-index-notifications'              => 'Notificaciones',
    'config-index-permissions'                => 'Permisos',
    'config-index-editor'                     => 'Editor', //Added: 2016.01.14
    'config-index-other'                      => 'Otro',
    'config-create-title'                     => 'Crear: Configuración global nueva',
    'config-create-subtitle'                  => 'Crear Configuración',
    'config-edit-title'                       => 'Editar: Configuración global',
    'config-edit-subtitle'                    => 'Editar Configuraciones',
    'config-edit-id'                          => 'ID',
    'config-edit-slug'                        => 'Código',
    'config-edit-default'                     => 'Valor predeterminado',
    'config-edit-value'                       => 'Valor actual',
    'config-edit-language'                    => 'Idioma',
    'config-edit-unserialize'                 => 'Obtener los valores del array, y cambiar los valores',
    'config-edit-serialize'                   => 'Get the serialized string of the changed values (to be entered in the field)',
    'config-edit-should-serialize'            => 'Serializar', //Added: 2016-01-16
    'config-edit-eval-warning'                => 'Si está seleccionado, el servidor usará eval()!
                      No usar esto si eval() está desactivado en el servidor o si no tiene los conocimientos al respecto!
                      Código específico ejecutado:', //Added: 2016-01-16
    'config-edit-reenter-password'            => 'Re-ingrese su clave', //Added: 2016-01-16
    'config-edit-auth-failed'                 => 'Las claves no son iguales', //Added: 2016-01-16
    'config-edit-eval-error'                  => 'Valor inválido', //Added: 2016-01-16
    'config-edit-tools'                       => 'Herramientas:',

];
