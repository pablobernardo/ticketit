<?php $notification_owner = unserialize($notification_owner);?>
<?php $ticket = unserialize($ticket);?>
<?php $original_ticket = unserialize($original_ticket);?>

@extends($email)

@section('subject')
	{{ trans('ticketit::email/globals.transfer') }}
@stop

@section('link')
	<a href="{{ route($setting->grab('main_route').'.show', $ticket->id) }}" style="background-color:{{ $setting->grab('email.color_button_bg') }};border-radius:4px;color:#ffffff;display:inline-block;font-family: Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;line-height:50px;text-align:center;text-decoration:none;width:200px;-webkit-text-size-adjust:none;">
	    {{ trans('ticketit::email/globals.view-ticket') }}
	</a>
@stop

@section('content')
	{!! trans('ticketit::email/transfer.data', [
	    'name'          =>  $notification_owner->name,
	    'subject'       =>  $ticket->subject,
	    'status'        =>  $ticket->status->name,
	    'agent'         =>  $original_ticket->agent->name,
	    'old_category'  =>  $original_ticket->category->name,
	    'new_category'  =>  $ticket->category->name
	]) !!}
@stop
