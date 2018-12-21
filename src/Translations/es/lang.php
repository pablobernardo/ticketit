<?php

return [

    /*
     *  Constants
     */

    'nav-active-tickets'                         => 'Tickets activos',
    'nav-completed-tickets'                      => 'Tickets completados',

    // Tables
    'table-id'                                   => '#',
    'table-subject'                              => 'Asunto',
    'table-owner'                                => 'Propietario',
    'table-status'                               => 'Estado',
    'table-last-updated'                         => 'Última actualización',
    'table-priority'                             => 'Prioridad',
    'table-agent'                                => 'Agente',
    'table-category'                             => 'Categoría',

    // Datatables
    'table-decimal'                              => '',
    'table-empty'                                => 'No hay datos en esta tabla',
    'table-info'                                 => 'Mostrando _START_ a _END_ de _TOTAL_ entradas',
    'table-info-empty'                           => 'Mostrando 0 entradas',
    'table-info-filtered'                        => '(filtrados de _MAX_ totales)',
    'table-info-postfix'                         => '',
    'table-thousands'                            => ',',
    'table-length-menu'                          => 'Mostrar _MENU_ entradas',
    'table-loading-results'                      => 'Cargando...',
    'table-processing'                           => 'Procesando...',
    'table-search'                               => 'Buscar:',
    'table-zero-records'                         => 'No hemos encontrado entradas que correspondan',
    'table-paginate-first'                       => 'Primera',
    'table-paginate-last'                        => 'Última',
    'table-paginate-next'                        => 'Siguiente',
    'table-paginate-prev'                        => 'Anterior',
    'table-aria-sort-asc'                        => ': activar para ordernar por esta columna ascendentemente',
    'table-aria-sort-desc'                       => ': activar para ordernar por esta columna descendentemente',

    'btn-back'                                   => 'Volver',
    'btn-cancel'                                 => 'Cancelar', // NEW
    'btn-close'                                  => 'Cerrar',
    'btn-delete'                                 => 'Borrar',
    'btn-edit'                                   => 'Editar',
    'btn-mark-complete'                          => 'Marcar como completado',
    'btn-submit'                                 => 'Enviar',

    'agent'                                      => 'Agente',
    'category'                                   => 'Categoría',
    'colon'                                      => ': ',
    'comments'                                   => 'Comentarios',
    'created'                                    => 'Creado',
    'description'                                => 'Descripción',
    'flash-x'                                    => '×', // &times;
    'last-update'                                => 'Última actualización',
    'no-replies'                                 => 'Sin respuestas.',
    'owner'                                      => 'Propietario',
    'priority'                                   => 'Prioridad',
    'reopen-ticket'                              => 'Reabrir ticket',
    'reply'                                      => 'Responder',
    'responsible'                                => 'Responsable',
    'status'                                     => 'Estado',
    'subject'                                    => 'Asunto',

    /*
     *  Page specific
     */

// ____
    'index-title'                                => 'Inicio',

// tickets/____
    'index-my-tickets'                           => 'Mis tickets',
    'btn-create-new-ticket'                      => 'Crear ticket',
    'index-complete-none'                        => 'No hay tickets completados',
    'index-active-check'                         => 'Asegúrate de revisar los tickets activos si no encuentras el ticket.',
    'index-active-none'                          => 'No hay tickets activos,',
    'index-create-new-ticket'                    => 'crear un ticket nuevo',
    'index-complete-check'                       => 'Asegúrate de revisar los tickets completados si no encuentras el ticket.',

    'create-ticket-title'                        => 'Formulario de ticket nuevo',
    'create-new-ticket'                          => 'Crear ticket',
    'create-ticket-brief-issue'                  => 'Resumen del problema a tratar',
    'create-ticket-describe-issue'               => 'Describe en detalle el problema',

    'show-ticket-title'                          => 'Ticket',
    'show-ticket-js-delete'                      => '¿Seguro que quieres borrar?: ',
    'show-ticket-modal-delete-title'             => 'Borrar ticket',
    'show-ticket-modal-delete-message'           => '¿Seguro que quieres borrar: :subject?',

    /*
     *  Controllers
     */

    // AgentsController
    'agents-are-added-to-agents'                 => ':names fueron añadidos a agentes',
    'administrators-are-added-to-administrators' => ':names fueron añadidos a administradores', //New
    'agents-joined-categories-ok'                => 'Agregado a categorías',
    'agents-is-removed-from-team'                => 'Eliminamos agente\s :name del equipo de agentes',
    'administrators-is-removed-from-team'        => 'Eliminamos administrador\es :name del equipo de administradores', // New

    // CategoriesController
    'category-name-has-been-created'             => 'La categoría :name ha sido creada',
    'category-name-has-been-modified'            => 'La categoría :name ha sido modificada',
    'category-name-has-been-deleted'             => 'La categoría :name ha sido borrada',

    // PrioritiesController
    'priority-name-has-been-created'             => 'La prioridad :name ha sido creada',
    'priority-name-has-been-modified'            => 'La prioridad :name ha sido modificada',
    'priority-name-has-been-deleted'             => 'La prioridad :name ha sido borrada',
    'priority-all-tickets-here'                  => 'Todos los tickets relacionados a la categoría',

    // StatusesController
    'status-name-has-been-created'               => 'El estado :name ha sido creado',
    'status-name-has-been-modified'              => 'El estado :name ha sido modificado',
    'status-name-has-been-deleted'               => 'El estado :name ha sido borrado',
    'status-all-tickets-here'                    => 'Todos los tickets relacionados al estado',

    // CommentsController
    'comment-has-been-added-ok'                  => 'Comentario añadido satisfactoriamente',

    // NotificationsController
    'notify-new-comment-from'                    => 'Nuevo comentario de ',
    'notify-on'                                  => ' en ',
    'notify-status-to-complete'                  => ' a completado ',
    'notify-status-to'                           => ' a ',
    'notify-transferred'                         => ' transferido ',
    'notify-to-you'                              => ' a ti ',
    'notify-created-ticket'                      => ' ha creado ticket ',
    'notify-updated'                             => ' ha actualizado ',

    // TicketsController
    'the-ticket-has-been-created'                => 'El ticket ha sido creado',
    'the-ticket-has-been-modified'               => 'El ticket ha sido modificado',
    'the-ticket-has-been-deleted'                => 'El ticket :name ha sido borrado',
    'the-ticket-has-been-completed'              => 'El ticket :name ha sido completado',
    'the-ticket-has-been-reopened'               => 'El ticket :name ha sido reabierto',
    'you-are-not-permitted-to-do-this'           => 'No tienes los permisos necesarios para realizar esta acción',

    /*
     *  Middlewares
     */

    //  IsAdminMiddleware IsAgentMiddleware ResAccessMiddleware
    'you-are-not-permitted-to-access'            => 'No tienes los permisos necesarios para acceder a esta página',

];